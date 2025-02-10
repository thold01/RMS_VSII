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
  @Input() tableData: { [key: string]: string }[] = [];
  @Input() tableColumns: string[] = [];

  @Input() infoData: any = {};

  arrInfor: [string, any][] = [];
  constructor() {}
  ngOnInit() {
    this.arrInfor = Object.entries(this.infoData);
    console.log('infoData', this.arrInfor);
  }
}
