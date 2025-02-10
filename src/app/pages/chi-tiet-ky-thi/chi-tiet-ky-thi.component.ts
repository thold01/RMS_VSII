import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TuiIcon, TuiScrollbar } from '@taiga-ui/core';
import { DetailTableComponent } from 'src/app/components/detail-table/detail-table.component';
import BreadcrumbComponent from 'src/app/components/breadcrumb/breadcrumb.component';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { DataService } from 'src/app/services/data.service';
import { DetailExamComponent } from '../../layouts/detail-exam/detail-exam.component';

@Component({
  standalone: true,
  selector: 'app-chi-tiet-ky-thi',
  imports: [
    NgForOf,
    TuiScrollbar,
    DetailTableComponent,
    BreadcrumbComponent,
    TuiIcon,
    ModalComponent,
    DetailExamComponent,
  ],
  templateUrl: './chi-tiet-ky-thi.component.html',
  styleUrls: ['./chi-tiet-ky-thi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChiTietKyThiComponent {
  tableData = [
    {
      STT: '1',
      'Họ và tên': 'Lê An Khuê',
      'Đơn vị ứng tuyển': 'Chi nhánh Long Biên',
    },
    {
      STT: '2',
      'Họ và tên': 'Trần Hải Nam',
      'Đơn vị ứng tuyển': 'Chi nhánh Long Biên',
    },
    {
      STT: '3',
      'Họ và tên': 'Lương Nhật Trường',
      'Đơn vị ứng tuyển': 'Chi nhánh Long Biên',
    },
    {
      STT: '4',
      'Họ và tên': 'Trần Nguyên Minh Khôi',
      'Đơn vị ứng tuyển': 'Chi nhánh Long Biên',
    },
    {
      STT: '5',
      'Họ và tên': 'Vũ Bảo Châu',
      'Đơn vị ứng tuyển': 'Chi nhánh Long Biên',
    },
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
