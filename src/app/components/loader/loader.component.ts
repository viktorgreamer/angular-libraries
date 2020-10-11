import {Component, Input, OnInit} from '@angular/core';
import {LoaderType} from '../../enum/loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() loaded = false;
  @Input() type = LoaderType.Circular;
  dots  = '.' ;

  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
        if (this.dots.length > 2) {
          this.dots = '.';
        } else {
          this.dots += '.';
        }
      }, 1000);
  }

  isCircular(): boolean {
    return this.type === LoaderType.Circular;
  }

}
