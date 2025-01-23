import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TuiScrollbar } from '@taiga-ui/core';
import { DetailTableComponent } from 'src/app/components/detail-table/detail-table.component';
import BreadcrumbComponent from 'src/app/components/breadcrumb/breadcrumb.component';

@Component({
  standalone: true,
  selector: 'app-chi-tiet-ky-thi',
  imports: [NgForOf, TuiScrollbar, DetailTableComponent, BreadcrumbComponent],
  templateUrl: './chi-tiet-ky-thi.component.html',
  styleUrls: ['./chi-tiet-ky-thi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChiTietKyThiComponent {
  infoData = [
    [
      { label: 'Hình thức thi', value: 'Thi có tổ chức' },
      { label: 'Loại hình khảo thí', value: 'Khảo sát' },
      { label: 'Vị trí thi', value: 'Chuyên viên khảo thí' },
      { label: 'Môn thi nghiệp vụ', value: 'Chuyên viên khảo thí' },
    ],
    [
      { label: 'Đối tượng thi', value: 'Ngoài hệ thống BIDV' },
      { label: 'Ngày bắt đầu', value: '30/06/2024' },
      { label: 'Môn tiếng Anh', value: 'Tiếng Anh' },
      { label: 'Ngày công bố kết quả', value: '--' },
    ],
  ];

  tableData = [
    { STT: '1', 'Họ và tên': 'Lê An Khuê', 'Đơn vị ứng tuyển': 'Chi nhánh Long Biên' },
    { STT: '2', 'Họ và tên': 'Trần Hải Nam', 'Đơn vị ứng tuyển': 'Chi nhánh Long Biên' },
    { STT: '3', 'Họ và tên': 'Lương Nhật Trường', 'Đơn vị ứng tuyển': 'Chi nhánh Long Biên' },
    { STT: '4', 'Họ và tên': 'Trần Nguyên Minh Khôi', 'Đơn vị ứng tuyển': 'Chi nhánh Long Biên' },
    { STT: '5', 'Họ và tên': 'Vũ Bảo Châu', 'Đơn vị ứng tuyển': 'Chi nhánh Long Biên' },
  ];

  tableColumns = ['STT', 'Họ và tên', 'Đơn vị ứng tuyển'];
}




