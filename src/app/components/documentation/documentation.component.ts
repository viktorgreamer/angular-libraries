import {Component, OnInit} from '@angular/core';
import {AccordionItem} from '../accordion/AccordionItem';
import {LoaderType} from '../../enum/loader-type.enum';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  showLoader = false;
  loaderType = LoaderType.Circular;

  title = 'challenge';
  accordionItems: AccordionItem[] = [
    {title: 'title1', content: 'content1', isExpanded: true},
    {title: 'title2', content: 'content2', isExpanded: false},
  ];
  progressValue = 50;
  openModal = false;
  public options = [
    'USA', 'United Arab Emirates', 'Russia', 'French', 'Portugal'
  ];

  ngOnInit(): void {}

  initLoader(): void {
    this.showLoader = true;
    setTimeout(() => this.showLoader = false, 3000);
  }

  switchLoaderType(): void {
    if (this.loaderType !== LoaderType.Circular) {
      this.loaderType = LoaderType.Circular;
      return;
    }
    this.loaderType = LoaderType.Loading;
  }

  log(): void {
    console.log('LOG');
  }
}
