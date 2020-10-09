import {Component} from '@angular/core';
import {AccordionItem} from './components/accordion/AccordionItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge';
  accordionItems: AccordionItem[] = [
    {title: 'title1', content: 'content1', isExpanded: true},
    {title: 'title2', content: 'content2', isExpanded: false},
  ];
  progressValue = 50;
}
