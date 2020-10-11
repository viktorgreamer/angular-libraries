import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from '../../components/card/card.component';
import {TopPageComponent} from '../../components/top-page/top-page.component';
import {TruncateStringPipe} from '../../components/documentation/pipe-documentation/truncate-string.pipe';
import {CreditCardPipePipe} from '../../pipes/credit-card-pipe.pipe';
import {StarRatingComponent} from '../../components/star-rating/star-rating.component';
import {AccordionComponent} from '../../components/accordion/accordion.component';


@NgModule({
  declarations: [
    CardComponent,
    TopPageComponent,
    TruncateStringPipe,
    CreditCardPipePipe,
    StarRatingComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    TopPageComponent,
    TruncateStringPipe,
    CreditCardPipePipe,
    StarRatingComponent,
    AccordionComponent,
  ],
})
export class SharedModule { }
