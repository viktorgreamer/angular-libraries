import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent implements OnInit {
   public searchTerm = '';
   @Input() public placeholder = '';
   @Output() public searchUpdate = new EventEmitter<string>();
  private searchUpdate$ = new Subject<string>();

   constructor() {
     this.searchUpdate$.pipe(
       debounceTime(250),
       distinctUntilChanged(),
     ).subscribe( value => {
       console.log(value);
       this.searchUpdate.emit(value);
     });
   }

  ngOnInit(): void {
  }

  public updateSearchTerm(term: string): void {
    this.searchUpdate$.next(term);
  }

}
