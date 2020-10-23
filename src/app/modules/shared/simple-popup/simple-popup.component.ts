import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss']
})
export class SimplePopupComponent implements OnInit {
  @Input() message = '';
  isShown = false;
  constructor() { }

  ngOnInit(): void {
  }
  public show(): void {
    this.isShown = true;
    setInterval( () => this.isShown = false, 2900);
  }

}
