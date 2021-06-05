import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() public totalItems = 1;
  @Input() public pageSize = 25;
  @Input() public currentPage = 1;

  @Output() public pageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public get totalPages(): number {
    return Math.ceil(this.totalItems || 1 / this.pageSize || 1);
  }

  public get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  public get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  public get pages(): number[] {
    const pages = [];
    if (this.currentPage > 1) {
      pages.push(this.currentPage - 1);
    }

    pages.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      pages.push(this.currentPage + 1);
    }

    if (this.currentPage + 1 < this.totalPages) {
      pages.push(this.currentPage + 2);
    }

    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pages.push(this.currentPage + 3);
    }

    return pages;
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}
