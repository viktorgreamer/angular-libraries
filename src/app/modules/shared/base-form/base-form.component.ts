import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';


interface IForm {
  form: FormGroup;
  forceLeave: boolean;
  showLeaveAlert(): void;
}
@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit, IForm {
  form: FormGroup;
  forceLeave = false;
  constructor() { }

  ngOnInit(): void {}
  showLeaveAlert(): void {
    alert('You have unsaved changes');
  }

}
