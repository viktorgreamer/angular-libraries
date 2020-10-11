import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PIPES_ROUTES} from './pipes-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES),
  ]
})
export class PipeModule { }
