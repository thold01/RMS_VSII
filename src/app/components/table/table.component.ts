import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiButton, TuiFormatNumberPipe } from '@taiga-ui/core';
import { ButtonsComponent } from '../buttons/buttons.component';


@Component({
  selector: 'app-table',
  imports: [NgForOf, TuiTable, ButtonsComponent],
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

})
export class TableComponent {

  data = [
    { 
      stt: 1,
      name: 'Kỳ thi toàn quốc 2025',
      nameType: 'Thi có tổ chức',
      target: 'Ngoài hệ thống BIDV',
      location: 'Chuyên viên khảo thí',
      subject: 'Chuyên viên khảo thí',
    },
    {
      stt: 2,
      name: 'Kỳ thi toàn quốc 2026',
      nameType: 'Thi có tổ chức',
      target: 'Hệ thống BIDV',
      location: 'Giảng viên',
      subject: 'Giảng viên',
    },
    {
      stt: 2,
      name: 'Kỳ thi quốc gia 2027',
      nameType: 'Thi tự luận',
      target: 'Ngoài hệ thống BIDV',
      location: 'Giảng viên',
      subject: 'Giảng viên',
    },
    {
      stt: 3,
      name: 'Kỳ thi toàn cầu 2028',
      nameType: 'Thi trắc nghiệm',
      target: 'Hệ thống BIDV',
      location: 'Chuyên viên khảo thí',
      subject: 'Chuyên viên khảo thí',
    },
    {
      stt: 4,
      name: 'Kỳ thi toàn cầu 2028',
      nameType: 'Thi trắc nghiệm',
      target: 'Hệ thống BIDV',
      location: 'Chuyên viên khảo thí',
      subject: 'Chuyên viên khảo thí',
    },
    {
      stt: 5,
      name: 'Kỳ thi toàn cầu 2028',
      nameType: 'Thi trắc nghiệm',
      target: 'Hệ thống BIDV',
      location: 'Chuyên viên khảo thí',
      subject: 'Chuyên viên khảo thí',
    },
    {
      stt: 6,
      name: 'Kỳ thi toàn cầu 2028',
      nameType: 'Thi trắc nghiệm',
      target: 'Hệ thống BIDV',
      location: 'Chuyên viên khảo thí',
      subject: 'Chuyên viên khảo thí',
    },
    {
      stt: 7,
      name: 'Kỳ thi toàn cầu 2028',
      nameType: 'Thi trắc nghiệm',
      target: 'Hệ thống BIDV',
      location: 'Chuyên viên khảo thí',
      subject: 'Chuyên viên khảo thí',
    },
    {
      stt: 8,
      name: 'Kỳ thi toàn cầu 2028',
      nameType: 'Thi trắc nghiệm',
      target: 'Hệ thống BIDV',
      location: 'Chuyên viên khảo thí',
      subject: 'Chuyên viên khảo thí',
    }
  ];

  columns: (keyof typeof this.data[0])[] = ['stt', 'name', 'nameType', 'target', 'location', 'subject']; // Thêm 'buttons' vào columns
  columnNames = ['STT', 'Tên kỳ thi', 'Hình thức thi', 'Đối tượng thi', 'Vị trí thi', 'Môn thi']; // Thêm 'Thao tác' cho cột buttons
}


