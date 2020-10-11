import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SERVICES_ROUTES} from './services-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICES_ROUTES),
  ]
})
export class ServicesModule { }
