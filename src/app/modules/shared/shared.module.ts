import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from '../../components/card/card.component';
import {TopPageComponent} from '../../components/top-page/top-page.component';
import {TruncateStringPipe} from '../../components/documentation/pipe-documentation/truncate-string.pipe';
import {CreditCardPipePipe} from '../../pipes/credit-card-pipe.pipe';
import {StarRatingComponent} from '../../components/star-rating/star-rating.component';
import {AccordionComponent} from '../../components/accordion/accordion.component';
import {CreditCardComponent} from '../components/credit-card/credit-card.component';
import {FormsModule} from '@angular/forms';
import {LoaderComponent} from '../../components/loader/loader.component';
import {ModalComponent} from '../../components/modal/modal.component';
import {QuoteComponent} from '../../components/quote/quote.component';
import {ToggleComponent} from '../../components/toggle/toggle.component';



@NgModule({
  declarations: [
    CardComponent,
    TopPageComponent,
    TruncateStringPipe,
    CreditCardPipePipe,
    StarRatingComponent,
    AccordionComponent,
    CreditCardComponent,
    LoaderComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    TopPageComponent,
    TruncateStringPipe,
    CreditCardPipePipe,
    StarRatingComponent,
    AccordionComponent,
    CreditCardComponent,
    LoaderComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
  ],
})
export class SharedModule { }
