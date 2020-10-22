import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-snack-bar-component',
  templateUrl: './snack-bar-component.component.html',
  styleUrls: ['./snack-bar-component.component.scss']
})
export class SnackBarComponentComponent implements OnInit {
  @Input() public color = 'green';
  @Input() public message = '';
  public isShown = false;
  constructor() { }

  ngOnInit(): void {
  }

  public show(): void {
    this.isShown = true;
    setTimeout(
      () => {
        this.isShown = false;
      },
      2000
    );

  }

}
