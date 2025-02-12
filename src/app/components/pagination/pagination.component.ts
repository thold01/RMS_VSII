import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import type { TuiContext, TuiStringHandler } from '@taiga-ui/cdk';
import {
  TuiButton,
  TuiFormatNumberPipe,
  TuiIcon,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiChevron } from '@taiga-ui/kit';
import {
  TuiButtonSelect,
  TuiDataListWrapper,
  TuiPagination,
} from '@taiga-ui/kit';

@Component({
  standalone: true,
  selector: 'app-pagination',
  imports: [
    AsyncPipe,
    FormsModule,
    NgForOf,
    TuiButton,
    TuiIcon,
    TuiButtonSelect,
    TuiDataListWrapper,
    TuiFormatNumberPipe,
    TuiPagination,
    TuiTable,
    TuiTextfield,
    TuiChevron,
  ],
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginationComponent {
  @Input() length = 20; // Tổng số items
  @Input() index = 0; // Trang hiện tại
  @Input() size = 10; // Số dòng mỗi trang
  @Input() items: number[] = [10, 50, 100]; // Các tùy chọn số dòng

  @Output() indexChange = new EventEmitter<number>();
  @Output() sizeChange = new EventEmitter<number>();

  onPageChange(newIndex: number) {
    this.indexChange.emit(newIndex);
  }

  onPageSizeChange(newSize: number) {
    this.sizeChange.emit(newSize);
  }

  content: TuiStringHandler<TuiContext<number>> = ({ $implicit }) =>
    `${$implicit} items per page`;
}
