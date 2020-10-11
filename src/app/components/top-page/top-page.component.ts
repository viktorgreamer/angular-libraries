import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {
  public showButton: boolean;

  @HostListener('window:scroll') onWindowScroll(): void {
    if (this.viewportScroller.getScrollPosition()[1] > window.innerHeight) {
      this.showButton = true;
    }
  }

  constructor(
    private viewportScroller: ViewportScroller
  ) {
  }

  ngOnInit(): void {
  }

  goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
