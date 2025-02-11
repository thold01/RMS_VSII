import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  index = 4;
  length = 20;
  size = 10;
  items = [10, 50, 100];
  content: TuiStringHandler<TuiContext<number>> = ({ $implicit }) =>
    `${$implicit} items per page`;
}
