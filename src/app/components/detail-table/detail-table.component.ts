import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TuiScrollbar } from '@taiga-ui/core';

@Component({
  selector: 'app-detail-table',
  standalone: true,
  imports: [NgForOf, TuiScrollbar],
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DetailTableComponent {
  @Input() infoData: { label: string; value: string }[][] = [];
  @Input() tableData: { [key: string]: string }[] = [];
  @Input() tableColumns: string[] = [];
}


