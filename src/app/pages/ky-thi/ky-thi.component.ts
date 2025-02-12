import { Component, inject, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import TableComponent from '../../components/table/table.component';
import FiltersComponent from '../../layouts/filters/filters.component';
import { TuiBadge } from '@taiga-ui/kit';
import { Router } from '@angular/router';
import { delay, of, Subject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { NoDataComponent } from 'src/app/layouts/no-data/no-data.component';
import PaginationComponent from 'src/app/components/pagination/pagination.component';

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
  ) {
    this.totalItems = 20;
    this.fetchData();
  }
  ngOnChange() {
    console.log('totalItems:', this.totalItems);
    console.log('currentPage:', this.currentPage);
    console.log('pageSize:', this.pageSize);
  }
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

  private http = inject(HttpClient);

  currentPage = 0; // Trang hiện tại (bắt đầu từ 0)
  pageSize = 10; // Số dòng mỗi trang
  totalItems = 0; // Tổng số items từ API
  items: any[] = []; // Dữ liệu bảng

  pageSizeOptions = [10, 50, 100]; // Các lựa chọn số dòng/trang

  fetchData() {
    // Giả lập API trả về danh sách item
    const allData = Array.from({ length: this.totalItems }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }));

    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    const pageData = allData.slice(start, end);

    of({ total: this.totalItems, data: pageData })
      .pipe(delay(500))
      .subscribe((response) => {
        this.items = response.data;
        console.log('data:', this.data);
      });
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.fetchData();
  }

  onPageSizeChange(newSize: number) {
    this.pageSize = newSize;
    this.currentPage = 0; // Reset về trang đầu
    this.fetchData();
  }

  filteredData = [...this.data]; // Lưu danh sách lọc
  searchTerm: string = '';

  filterData(searchValue: string) {
    this.searchTerm = searchValue;
    if (!this.data || this.data.length === 0) {
      this.filteredData = []; // Gán filteredData là mảng rỗng
      return;
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
