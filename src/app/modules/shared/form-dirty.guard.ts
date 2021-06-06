import {Injectable} from '@angular/core';
import {BaseFormComponent} from './base-form/base-form.component';
import {CanDeactivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<BaseFormComponent> {
  canDeactivate(component: BaseFormComponent): boolean {
    if (component.form.dirty && !component.forceLeave) {
      component.showLeaveAlert();
      return false;
    }
    return true;
  }
}
