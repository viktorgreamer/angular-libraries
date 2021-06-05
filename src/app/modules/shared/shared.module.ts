import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from '../../components/card/card.component';
import {TopPageComponent} from '../../components/top-page/top-page.component';
import {TruncateStringPipe} from '../../components/documentation/pipe-documentation/truncate-string.pipe';
import {CreditCardPipePipe} from '../../pipes/credit-card-pipe.pipe';
import {StarRatingComponent} from '../../components/star-rating/star-rating.component';
import {AccordionComponent} from '../../components/accordion/accordion.component';
import {CreditCardComponent} from '../components/credit-card/credit-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoaderComponent} from '../../components/loader/loader.component';
import {ModalComponent} from '../../components/modal/modal.component';
import {QuoteComponent} from '../../components/quote/quote.component';
import {ToggleComponent} from '../../components/toggle/toggle.component';
import {DebounceSearchComponent} from '../../components/debounce-search/debounce-search.component';
import {SearchListComponent} from '../../components/search-list/search-list.component';
import {FilterTermPipe} from '../../components/documentation/pipe-documentation/filter-term.pipe';
import { CounterComponent } from './counter/counter.component';
import {RippleDirective} from '../directives/ripple.directive';
import { EmailFormComponentComponent } from './email-form-component/email-form-component.component';
import { PaginationComponent } from './pagination/pagination.component';
import {SnackBarComponentComponent} from './snack-bar-component/snack-bar-component.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { CountDownComponent } from './count-down/count-down.component';
import {TabComponent} from './tab/tab.component';

@NgModule({
  declarations: [
    CardComponent,
    TopPageComponent,
    TruncateStringPipe,
    CreditCardPipePipe,
    FilterTermPipe,
    StarRatingComponent,
    AccordionComponent,
    CreditCardComponent,
    LoaderComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    RippleDirective,
    EmailFormComponentComponent,
    PaginationComponent,
    SnackBarComponentComponent,
    SimplePopupComponent,
    CountDownComponent,
    TabComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    DebounceSearchComponent,
    SearchListComponent,
    FilterTermPipe,
    CounterComponent,
    RippleDirective,
    EmailFormComponentComponent,
    PaginationComponent,
    SnackBarComponentComponent,
    SimplePopupComponent,
    CountDownComponent,
    TabComponent,
  ],
})
export class SharedModule { }
