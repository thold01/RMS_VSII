import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import TableComponent from '../../components/table/table.component';
import FiltersComponent from '../../layouts/filters/filters.component';
import { TuiBadge } from '@taiga-ui/kit';
import { Router } from '@angular/router';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { NoDataComponent } from 'src/app/layouts/no-data/no-data.component';

@Component({
  selector: 'ky-thi',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    FiltersComponent,
    TuiBadge,
    NoDataComponent,
    PaginationComponent,
  ],
  templateUrl: './ky-thi.component.html',
  styleUrls: ['./ky-thi.component.scss'],
})
export class ChooseExamComponent {
  constructor(
    @Inject(Router) private router: Router,
    private dataService: DataService
  ) {}

  data: KyThi[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    ten_ky_thi: `Kỳ thi toàn quốc ${index + 2023}`,
    hinh_thuc_thi: 'Thi có tổ chức',
    loai_hinh_khao_thi: 'Khảo sát',
    doi_tuong_thi: 'Ngoài hệ thống BIDV',
    vi_tri_thi: 'Chuyên viên khảo thí',
    mon_thi_nghiep_vu: 'Chuyên viên khảo thí',
    don_vi_dau_moi: '--',
    ngay_bat_dau: '30/06/2024',
    mon_tieng_anh: 'Tiếng Anh',
    ngay_cong_bo_ket_qua: '--',
  }));

  data_headers = [
    'STT',
    'Tên kỳ thi',
    'Hình thức thi',
    'Đối tượng thi',
    'Vị trí thi',
    'Môn thi nghiệp vụ',
    '',
  ];

  filteredData = [...this.data]; // Lưu danh sách lọc
  searchTerm: string = '';

  filterData(searchValue: string) {
    this.searchTerm = searchValue;
    if (!this.data || this.data.length === 0) {
      this.filteredData = []; // Gán filteredData là mảng rỗng
      return; // Kết thúc hàm
    }

    this.filteredData = this.data.filter(
      (item) =>
        item.ten_ky_thi
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase().trim()) ||
        item.hinh_thuc_thi
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase().trim()) ||
        item.doi_tuong_thi
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase().trim()) ||
        item.vi_tri_thi
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase().trim()) ||
        item.mon_thi_nghiep_vu
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase().trim())
    );
  }

  handleJoinTest(item: any) {
    if (!item) {
      // Nếu không có kỳ thi nào, chuyển hướng sang trang no-data
      this.router.navigate(['/no-data']);
    } else {
      // Nếu có kỳ thi, thực hiện logic tham gia
      console.log('Tham gia kỳ thi:', item);
      this.dataService.sendData(item); // Gửi dữ liệu đi
      this.router.navigate(['/detail', item.id]);
    }
  }
}

interface KyThi {
  ten_ky_thi: string;
  hinh_thuc_thi: string;
  doi_tuong_thi: string;
  vi_tri_thi: string;
  mon_thi_nghiep_vu: string;
}
