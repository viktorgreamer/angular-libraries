import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() public counter = 0;
  @Input() public min = 0;
  @Input() public max = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public up(): void {
    if (this.counter < this.max) {
      this.counter++;
    }
  }

  public down(): void {
    if (this.counter > this.min) {
      this.counter--;
    }
  }

}
