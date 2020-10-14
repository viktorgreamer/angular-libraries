import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  public searchTerm = '';
  @Input() public options = [];
  @Output() public selectedObject = '';

  public hasBeenSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

  public updateSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }
  public selectSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = true;
  }

}
