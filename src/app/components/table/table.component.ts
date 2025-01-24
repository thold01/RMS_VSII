import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component, Output } from '@angular/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiButton, TuiFormatNumberPipe } from '@taiga-ui/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { Input } from '@angular/core';


@Component({
  selector: 'app-table',
  imports: [NgForOf, TuiTable, ButtonsComponent,NgIf],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

})
export class TableComponent {

  
  @Input() data: any[] = [];
  @Input() columnDefinitions: { field: string, header: string }[] = [];
  @Input() isCheckInput:boolean = false
  @Input() onClickHandle: () => void = () => {}

  // Trả về columnDefinitions mà không thêm cột "Thao tác"
  get columns(): { field: string, header: string }[] {
    return this.columnDefinitions;
  }
}


