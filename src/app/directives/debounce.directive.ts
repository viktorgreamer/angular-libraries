import {Directive, OnInit, Output, EventEmitter, OnDestroy, HostListener} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceDirective implements OnInit, OnDestroy {

  @Output() public debounceClick = new EventEmitter();
  public clicks = new Subject();
  public subscription: Subscription;

  constructor() {
  }

  public ngOnInit(): void {
    const debounceTimesInMs = 500;
    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimesInMs)
    ).subscribe((value: any) => this.debounceClick.emit(value));
  }


  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  public clickEvent(event: any): void {
    event.preventDefault();
    event.stopPrapagation();
    this.clicks.next();
  }
}
