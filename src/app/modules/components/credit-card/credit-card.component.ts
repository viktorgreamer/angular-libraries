import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  @Input() public creditCardNumber = '';

  private readonly = false;
  public get isReadOnly(): boolean {
   return  this.readonly;
  }
  @Input() public set isReadOnly(value: boolean) {
    this.readonly = value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
