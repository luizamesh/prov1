import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-enployees',
  templateUrl: './add-enployees.component.html',
  styleUrls: ['./add-enployees.component.css']
})
export class AddEnployeesComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is requared';

  constructor(private formBuilder: FormBuilder, private router: Router) {}


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

  onSubmit(post) {

console.log(post);
    this.router.navigateByUrl('/fetch-data');

  }
}
