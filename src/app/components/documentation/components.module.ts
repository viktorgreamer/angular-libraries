import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionComponent} from '../accordion/accordion.component';
import {StarRatingComponent} from '../star-rating/star-rating.component';
import {TopPageComponent} from '../top-page/top-page.component';
import {DocumentationComponent} from './documentation.component';
import {RouterModule} from '@angular/router';
import {COMPONENT_DOCUMENTATION_ROUTES} from './documentation-routing.module';
import {SharedModule} from '../../modules/shared/shared.module';

@NgModule({
  declarations: [
    DocumentationComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(COMPONENT_DOCUMENTATION_ROUTES)
  ],
  exports: [DocumentationComponent],
})
export class ComponentsModule { }
