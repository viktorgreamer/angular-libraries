import { Component, OnInit } from '@angular/core';
import {AccordionItem} from '../accordion/AccordionItem';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  title = 'challenge';
  accordionItems: AccordionItem[] = [
    {title: 'title1', content: 'content1', isExpanded: true},
    {title: 'title2', content: 'content2', isExpanded: false},
  ];
  progressValue = 50;

  ngOnInit(): void {
  }

}