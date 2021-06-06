import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  public snackbar$ = new Subject<string>();

  constructor() {}

  public callSnackBar(message: string): void {
    this.snackbar$.next(message);
  }
}
