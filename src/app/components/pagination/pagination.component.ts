import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiDataListWrapper, TuiPagination } from '@taiga-ui/kit';
import type { TuiContext, TuiStringHandler } from '@taiga-ui/cdk';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, TuiPagination, TuiDataListWrapper],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  onSizeButtonClick() {
    throw new Error('Method not implemented.');
  }
  index = 0;
  length = 20;
  size = 10;
  readonly items = [10, 50, 100];

  content: TuiStringHandler<TuiContext<number>> = ({ $implicit }) =>
    `${$implicit} items per page`;
}
