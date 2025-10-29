import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TasksPresenter } from '../../../store/tasks-presenter';

@Component({
  selector: 'codes-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss'
})
export class CreateCategoryComponent implements OnInit {
  
  public formGroup: FormGroup = new FormGroup({});

  constructor(
    private presenter: TasksPresenter,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateCategoryComponent>

  ) {}


  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(40)])]
    })
  }

  createCategory() {
    if (this.formGroup.valid) {
      this.presenter.createCategory(this.formGroup.getRawValue());
      this.dialogRef.close();
    }
  }
}
