import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import BreadcrumbComponent from 'src/app/components/breadcrumb/breadcrumb.component';
import { TuiIcon } from '@taiga-ui/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { InterviewCardComponent } from 'src/app/components/interview-card/interview-card.component';
import { CandidateDetailsComponent } from 'src/app/components/candidate-details/candidate-details.component';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-thi-sinh-gioi-thieu-ban-than',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    TuiIcon,
    ModalComponent,
    InterviewCardComponent,
    CandidateDetailsComponent,
  ],
  templateUrl: './thi-sinh-gioi-thieu-ban-than.component.html',
  styleUrls: ['./thi-sinh-gioi-thieu-ban-than.component.scss'],
})
export class ThiSinhGioiThieuBanThanComponent {
  handleShowDetails() {
    this.showDetails = true;
  }
  showDetails = false;
  breadcrumbItems = [
    { caption: 'Chọn đợt thi và hội đồng phỏng vấn', routerLink: '/' },
    { caption: 'Phỏng vấn', routerLink: '/introduce' },
  ];
  selectedCandidate: Candidate = {
    name: 'Hoàng Quốc Đạt',
    idCard: '038092881937',
    email: 'hoangdat@gmail.com',
    dob: '03/09/1999',
    major: 'Thiết kế đồ hoạ',
    gender: 'Nam',
    height: 170,
    weight: 65,
    experience: 3,
    position: 'Giao dịch viên',
    issueDate: '01/01/2015',
    issuePlace: 'Công an Hà Nội',
    address: '123 Nguyễn Trãi, Hà Nội',
    phone: '0987654321',
    university: 'Đại học Kinh tế Quốc dân',
    degree: 'Cử nhân Tài chính',
    grade: 'Giỏi',
    graduationScore: 8.5,
    degreeType: 'Chính quy',
    education: {
      highSchool: [
        {
          name: 'Trường THPT Đào Duy Từ',
          level: 'Trung học phổ thông',
          grade: 'Khá',
          icon: 'assets/images/infor_candidate/Icon_Certificate.png',
        },
        {
          name: 'Trường THPT Ngô thì Nhậm',
          level: 'Trung học phổ thông',
          grade: 'Xuất sắc',
          icon: 'assets/images/infor_candidate/Icon_Certificate.png',
        },
      ],
      university: 'Đại học Bách Khoa Hà Nội',
      degree: 'Kỹ sư phần mềm',
      grade: 'Giỏi',
      graduationScore: 8.5,
      degreeType: 'Chính quy',
    },
    jobs: [
      {
        title: 'Nhân viên tín dụng',
        company: 'Techcombank',
        period: '2020-2022',
        location: 'Hà Nội',
      },
      {
        title: 'Giao dịch viên',
        company: 'BIDV',
        period: '2022-nay',
        location: 'Hà Nội',
      },
    ],
    awards: [
      { year: '2021', title: 'Nhân viên xuất sắc' },
      { year: '2023', title: 'Giao dịch viên ưu tú' },
    ],
  };
}
