import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-enployees',
  templateUrl: './add-enployees.component.html',
  styleUrls: ['./add-enployees.component.css']
})
export class AddEnployeesComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is requared';

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.createForm()

  }
  createForm() {
    this.formGroup = this.formBuilder.group(
      {
        'name': [null, Validators.required],
        'surname': [null, Validators.required]
      });
  }
  get name() {
    return this.formGroup.get('name') as FormControl
  }
}
