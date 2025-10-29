import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAssistant, ICategory, ITasks } from '../../../interface/tasks.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { TasksPresenter } from '../../../store/tasks-presenter';

@Component({
  selector: 'codes-create-tasks-component',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.scss']
})
export class CreateTasksComponent implements OnInit, OnChanges {

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
      category: [content && content?.category ? this.assistant?.category.find(dt => dt.name === content.category.name) : null],
      status: [content && content?.status ? this.assistant?.status.find(dt => dt.name === content.status) : null],
      priority: [content && content?.priority ? this.assistant?.priority.find(dt => dt.name === content.priority) : null],
      startDt: [content ? content?.startDt : null],
      endDt: [content ? content?.endDt : null]
    })  
  }

  openModal() {
   const dialogRef = this.dialog.open(CreateCategoryComponent, {
    width: '31rem',
   });
  }

  submitForm() {
    const form = this.formGroup.value;
    // this.presenter.getTask('d0e24242-34ff-4b71-8b92-83859c946c6c')

    if(this.formGroup.valid){
      const payload = {
        ...form,
        startDt: form.startDt ? form.startDt.toISOString() : null,
        endDt: form.endDt ? form.endDt.toISOString() : null
      }
      this.presenter.setTasks(payload);
    } else {
      this.formGroup.markAllAsTouched(); 
      return     
    }
  }
}