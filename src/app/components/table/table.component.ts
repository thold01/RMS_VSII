import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import type { TuiContext, TuiStringHandler } from '@taiga-ui/cdk';
import { TuiButton, TuiFormatNumberPipe, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonSelect, TuiDataListWrapper, TuiPagination } from '@taiga-ui/kit';

@Component({
  standalone: true,
  selector: 'app-table',
  imports: [
    AsyncPipe,
    FormsModule,
    NgForOf,
    TuiButton,
    TuiButtonSelect,
    TuiDataListWrapper,
    TuiFormatNumberPipe,
    TuiPagination,
    TuiTable,
    TuiTextfield,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TableComponent {
  protected readonly data = Array.from({ length: 10 }, (_, index) => ({
    ten_ky_thi: `Kỳ thi toàn quốc ${index + 1}`,
    hinh_thuc_thi: 'Thi có tổ chức',
    doi_tuong_thi: 'Ngoài hệ thống BIDV',
    vi_tri_thi: 'Chuyên viên khảo thí',
    mon_thi_nghiep_vu: 'Chuyên viên khảo thí',
  }));

  protected index = 0;
  protected length = 20;
  protected size = 10;
  protected readonly items = [10, 50, 100];
  protected readonly states = ['Đang mở', 'Đã kết thúc', 'Sắp mở'];
  protected filterState = '';

  protected readonly content: TuiStringHandler<TuiContext<number>> = ({ $implicit }) =>
    `${$implicit} items per page`;
}
