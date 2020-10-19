import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-form-component',
  templateUrl: './email-form-component.component.html',
  styleUrls: ['./email-form-component.component.scss']
})
export class EmailFormComponentComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }


  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
  }

  public submitMessage(): void {
    console.log('Submit message');
  }

}
