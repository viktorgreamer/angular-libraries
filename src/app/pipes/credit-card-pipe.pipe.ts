import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipePipe implements PipeTransform {

  transform(cardNumber: any): string {
    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Length';
    }
    if (!this.isAllNumbers(cardNumber)) {
      return 'Only numbers allowed';
    }
    return String(cardNumber).replace(/^\d{12}/, 'xxxx-xxxx-xxxx-') ;
  }
  private hasCorrectLength( cardNumber: string): boolean {
    return String(cardNumber).length === 16;
  }

  private isAllNumbers(cardNumber: string): boolean {
    return (new RegExp(/^\d+$/)).test(cardNumber);
  }

}
