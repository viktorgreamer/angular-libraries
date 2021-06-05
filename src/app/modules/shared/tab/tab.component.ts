import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() public tabs: { title: string, active: boolean }[] = [];
  @Output() public selectedTabIndex = new EventEmitter<number>();
  currentTabIndex = 0;

  constructor() {}

  ngOnInit(): void {
  }

  setTag(i: number): void {
    this.currentTabIndex = i;
    this.selectedTabIndex.emit(i);
  }
}
