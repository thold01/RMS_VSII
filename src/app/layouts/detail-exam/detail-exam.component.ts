import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailExamItemComponent } from '../../components/detail-exam-item/detail-exam-item.component';

@Component({
  selector: 'app-detail-exam',
  standalone: true,
  imports: [CommonModule, DetailExamItemComponent],
  templateUrl: './detail-exam.component.html',
  styleUrls: ['./detail-exam.component.scss'],
})
export class DetailExamComponent {
  @Input() leftColumn: { label: string; value: string }[] = [];
  @Input() rightColumn: { label: string; value: string }[] = [];
  @Input() infoData: any = {};

  arrInfor: [string, any][] = [];
  constructor() {}
  labelsMap: Record<string, string> = {
    hinh_thuc_thi: 'Hình thức thi',
    loai_hinh_khao_thi: 'Loại hình khảo thí',
    vi_tri_thi: 'Vị trí thi',
    mon_thi_nghiep_vu: 'Môn thi nghiệp vụ',
    don_vi_dau_moi: 'Đơn vị đầu mối',
    doi_tuong_thi: 'Đối tượng thi',
    ngay_bat_dau: 'Ngày bắt đầu',
    mon_tieng_anh: 'Môn tiếng Anh',
    ngay_cong_bo_ket_qua: 'Ngày công bố kết quả',
  };
  ngOnInit() {
    const infoArray = Object.entries(this.infoData)
      .map(([key, value]) => ({
        label: this.labelsMap[key] || key,
        value: String(value) || '--',
      }))
      .filter((item) => item.label !== 'id' && item.label !== 'ten_ky_thi'); // Loại bỏ id và tên kỳ thi

    // Tách dữ liệu thành hai cột
    const leftColumnLabels = [
      'Hình thức thi',
      'Loại hình khảo thí',
      'Vị trí thi',
      'Môn thi nghiệp vụ',
      'Đơn vị đầu mối',
    ];

    const rightColumnLabels = [
      'Hình thức thi',
      'Đối tượng thi',
      'Ngày bắt đầu',
      'Môn tiếng Anh',
      'Ngày công bố kết quả',
    ];

    this.leftColumn = infoArray.filter((item) =>
      leftColumnLabels.includes(item.label)
    );

    this.rightColumn = infoArray.filter((item) =>
      rightColumnLabels.includes(item.label)
    );
  }
}
