import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() totalCount!: number;
  @Input() pageSize!: number;
  @Input() siblingCount!: number;
  @Input() currentPage!: number;

  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  get pages(): number[] {
    const startPage = Math.max(1, this.currentPage - this.siblingCount);
    const endPage = Math.min(this.totalPages, this.currentPage + this.siblingCount);

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }

  onPageClick(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }
}
