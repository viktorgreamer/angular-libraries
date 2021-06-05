import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import { DebounceDirective } from './directives/debounce.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ToolBarComponent,
    AppComponent,
    DebounceDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
    exports: [
        DebounceDirective
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
