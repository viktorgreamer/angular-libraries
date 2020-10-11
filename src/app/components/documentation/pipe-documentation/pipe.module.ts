import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PIPES_ROUTES} from './pipes-routing.module';
import {PipeDocumentationComponent} from './pipe-documentation.component';
import {TruncateStringPipe} from './truncate-string.pipe';

@NgModule({
  declarations: [
    TruncateStringPipe,
    PipeDocumentationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PIPES_ROUTES),
  ],
})
export class PipeModule { }
