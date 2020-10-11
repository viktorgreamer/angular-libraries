import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PIPES_ROUTES} from './pipes-routing.module';
import {PipeDocumentationComponent} from './pipe-documentation.component';
import {SharedModule} from '../../../modules/shared/shared.module';

@NgModule({
  declarations: [
    PipeDocumentationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES),
    SharedModule,
  ],
})
export class PipeModule { }
