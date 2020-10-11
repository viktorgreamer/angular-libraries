import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {LoaderComponent} from './components/loader/loader.component';

@NgModule({
  declarations: [
    ToolBarComponent,
    AppComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
