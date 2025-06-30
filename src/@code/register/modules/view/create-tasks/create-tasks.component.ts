import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Tasks } from '../../../interface/tasks.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from '../create-category/create-category.component';

@Component({
  selector: 'codes-create-tasks-component',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.scss']
})
export class CreateTasksComponent implements OnInit, OnChanges {

  public formGroup: FormGroup = new FormGroup({});
  public category: Category[] = [
    {id: 1, title: 'Estudos'},
    {id: 2, title: 'Tarefas'}
  ]

   public status: Category[] = [
    {id: 1, title: 'PENDENTE'},
    {id: 2, title: 'AGUARDANDO'}
  ]

   public priority: Category[] = [
    {id: 1, title: 'Alta'},
    {id: 2, title: 'Baixa'}
  ]
  @Input() content: any;

  constructor(
    private formBuilder: FormBuilder,
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

  setFormGroup(content?:Tasks): void {
    this.formGroup = this.formBuilder.group({
      title: [content ? content?.title: '', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(60)])],
      description: [content ? content?.description : '', Validators.compose([Validators.minLength(0), Validators.maxLength(100)])],
      category: [content ? content?.category : null],
      status: [content ? content?.status : null],
      priority: [content ? content?.priority : null],
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

    if(!this.formGroup.valid){
      const form = this.formGroup.value;

      const payload = {
        ...form,
        startDt: form.startDt ? form.startDt.toISOString() : null,
        endDt: form.endDt ? form.endDt.toISOString() : null
      }
    }
  }
}