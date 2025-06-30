import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'codes-create-category',
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss'
})
export class CreateCategoryComponent implements OnInit {
  
  public formGroup: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateCategoryComponent>
  ) {}


  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.compose([Validators.maxLength(40)])]
    })
  }

  createCategory() {
    const form = this.formGroup.value
    if (form.title.length) {
      this.dialogRef.close(form)
    }
  }
}
