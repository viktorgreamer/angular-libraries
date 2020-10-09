import {Component, Input, OnInit} from '@angular/core';
import {AccordionItem} from './AccordionItem';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() public accordionItems: AccordionItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
