import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TuiIcon, TuiScrollbar } from '@taiga-ui/core';
import BreadcrumbComponent from 'src/app/components/breadcrumb/breadcrumb.component';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { DataService } from 'src/app/services/data.service';
import { DetailExamComponent } from '../../layouts/detail-exam/detail-exam.component';
import TableComponent from '../../components/table/table.component';

@Component({
  standalone: true,
  selector: 'app-chi-tiet-ky-thi',
  imports: [
    NgForOf,
    TuiScrollbar,
    BreadcrumbComponent,
    TuiIcon,
    ModalComponent,
    DetailExamComponent,
    TableComponent,
  ],
  templateUrl: './chi-tiet-ky-thi.component.html',
  styleUrls: ['./chi-tiet-ky-thi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChiTietKyThiComponent {
  columns = [
    { key: 'id', label: 'STT', hasBorder: false },
    { key: 'name', label: 'Họ và tên', hasBorder: false },
    { key: 'application_unit', label: 'Đơn vị ứng tuyền', hasBorder: false },
  ];

  tableData = [
    {
      id: '1',
      name: `Lê An Khuê`,
      application_unit: 'Chi nhánh Long Biên',
    },
    {
      id: '2',
      name: 'Trần Hải Nam',
      application_unit: 'Chi nhánh Long Biên',
    },
    {
      id: '3',
      name: 'Lương Nhật Trường',
      application_unit: 'Chi nhánh Long Biên',
    },
    {
      id: '4',
      name: 'Trần Nguyên Minh Khôi',
      application_unit: 'Chi nhánh Long Biên',
    },
    {
      id: '5',
      name: 'Vũ Bảo Châu',
      application_unit: 'Chi nhánh Long Biên',
    },
    {
      id: '6',
      name: 'Trần Nguyên Minh Khôi',
      application_unit: 'Chi nhánh Long Biên',
    },
    {
      id: '7',
      name: 'Vũ Bảo Châu',
      application_unit: 'Chi nhánh Long Biên',
    },
  ];

  breadcrumbItems = [
    { caption: 'Danh sách kì thi', routerLink: '/' },
    { caption: 'Chi tiết kì thi', routerLink: '/detail' },
  ];

  constructor(private router: Router, private dataService: DataService) {
    this.dataService.getData().subscribe((data: any) => {
      this.selectedProduct = data; // Nhận dữ liệu
    });
    console.log(this.selectedProduct);
  }

  tableColumns = ['STT', 'Họ và tên', 'Đơn vị ứng tuyển'];
  isLoading: boolean = false;
  selectedProduct: any;
  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.selectedProduct = data; // Nhận dữ liệu
    });
  }
  onClick() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/']);
      this.isLoading = false;
    }, 2000);
  }
}
