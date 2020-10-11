import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() public quote = '';
  @Input()  public author = '';
  @Input()  public occupation = '';
  @Input()  public type = 'default';

  constructor() { }

  ngOnInit(): void {
  }

  class(): string {
    return 'quote-container ' + this.type;
  }
}
