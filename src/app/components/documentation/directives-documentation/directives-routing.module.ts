import {Routes} from '@angular/router';
import {FormDirtyGuard} from '../../../modules/shared/form-dirty.guard';
import {DirectivesDocumentationComponent} from './directives-documentation.component';

export const DIRECTIVES_ROUTES: Routes = [
  {
    path: '',
    component: DirectivesDocumentationComponent,
    canDeactivate: [FormDirtyGuard]
  },
];
