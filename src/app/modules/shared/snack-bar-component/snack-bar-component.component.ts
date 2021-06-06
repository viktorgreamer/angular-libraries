import {Component, Input, OnInit} from '@angular/core';
import {SnackBarService} from '../snack-bar.service';

@Component({
  selector: 'app-snack-bar-component',
  templateUrl: './snack-bar-component.component.html',
  styleUrls: ['./snack-bar-component.component.scss']
})
export class SnackBarComponentComponent implements OnInit {
  @Input() public color = 'green';
  @Input() public message = '';
  public isShown = false;
  constructor(private snackbar: SnackBarService) { }

  ngOnInit(): void {
    this.snackbar.snackbar$.subscribe(
      (message) => {
        this.message = message;
        this.show();
      }
    );
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
