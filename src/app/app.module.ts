import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { TopPageComponent } from './components/top-page/top-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    CardComponent,
    AccordionComponent,
    StarRatingComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
