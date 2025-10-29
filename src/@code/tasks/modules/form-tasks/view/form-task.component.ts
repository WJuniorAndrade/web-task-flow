import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAssistant, ICategory, ITasks } from '../../../interface/tasks.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from '../../create-category/create-category.component';
import { TasksPresenter } from '../../../store/tasks-presenter';

@Component({
  selector: 'codes-form-task-component',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.scss']
})
export class FormTaskComponent implements OnInit, OnChanges {

  public formGroup: FormGroup = new FormGroup({});

  @Input() content: any;
  @Input() assistant!: IAssistant;


  constructor(
    private formBuilder: FormBuilder,
    public presenter: TasksPresenter,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.setFormGroup(this.content);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content'] && this.content) {
      this.setFormGroup(this.content);
    }
  }

  setFormGroup(content?: ITasks): void {

    this.formGroup = this.formBuilder.group({
      title: [content ? content?.title: null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(60)])],
      description: [content ? content?.description : null, Validators.compose([Validators.maxLength(100)])],
      category: [content && content?.category ? this.assistant?.category.find(dt => dt.name === content.category.name)?.name : null, Validators.compose([Validators.required])],
      status: [content && content?.status ? this.assistant?.status.find(dt => dt.name === content.status)?.name : null],
      priority: [content && content?.priority ? this.assistant?.priority.find(dt => dt.name === content.priority)?.name : null],
      start_dt: [content ? content?.start_dt : null],
      end_dt: [content ? content?.end_dt : null]
    })  
  }

  openModal() {
   const dialogRef = this.dialog.open(CreateCategoryComponent, {
    width: '31rem',
   });
  }

  submitForm() {
    const form = this.formGroup.value;

    if(this.formGroup.valid){
      form.start_dt = form.start_dt ? form.start_dt.toISOString() : null;
      form.end_dt = form.end_dt ? form.end_dt.toISOString() : null;
      this.presenter.setTasks(form);
    } else {
      this.formGroup.markAllAsTouched(); 
      return     
    }
  }
}