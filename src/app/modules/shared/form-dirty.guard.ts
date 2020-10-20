import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {DirectivesDocumentationComponent} from '../../components/documentation/directives-documentation/directives-documentation.component';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<DirectivesDocumentationComponent>{
  canDeactivate(
    component: DirectivesDocumentationComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    if (component.isCanBeDeactivated) {
      alert('You Cannot leave Component');
      return false;
    }
    alert('You Can leave Component');
    return  true;
  }
}
