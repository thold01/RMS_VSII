import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPanelComponent } from '../../components/question-panel/question-panel.component';
import { QuestionStatsComponent } from '../../components/question-stats/question-stats.component';
import { CandidateInfoCardComponent } from '../../components/candidate-info-card/candidate-info-card.component';
import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import { CandidateDetailsComponent } from "../../components/candidate-details/candidate-details.component";
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-quan-li-cau-hoi',
  standalone: true,
  imports: [
    CommonModule,
    QuestionPanelComponent,
    QuestionStatsComponent,
    CandidateInfoCardComponent,
    BreadcrumbComponent,
    CandidateDetailsComponent
],
  templateUrl: './quan-li-cau-hoi.component.html',
  styleUrls: ['./quan-li-cau-hoi.component.scss'],
})
export class QuanLiCauHoiComponent {
  timeLeft = '09:00';

  questionData = {
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.`,
    hint: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.`,
    category: `Kinh tế`,
    numQ: `1/4`,
  };

  breadcrumbItems = [
    { caption: 'Danh sách kì thi', routerLink: '/' },
    { caption: 'Chi tiết kì thi', routerLink: '/detail' },
    { caption: 'Phỏng vấn', routerLink: '/phong-van' },
  ];

  statsData = {
    answered: 4,
    unanswered: 13,
    detail: [
      { name: 'Kinh tế vĩ mô', status: 'Đã trả lời' },
      { name: 'Nghiệp vụ', status: 'Chưa trả lời' },
      { name: 'Anh', status: 'Đã trả lời' },
    ],
  };

  showCandidateModal = false;

  // selectedCandidate = {
  //   name: 'Trần Quốc Khánh',
  //   email: 'khanh@gmail.com',
  //   idCard: '038092881937',
  //   birthDate: '03/09/1999',
  //   position: 'Giao dịch viên',
  // };

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
      brand: 'Chi nhánh Long Biên',
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

  // Mở modal chi tiết
  handleViewCandidateDetail() {
    this.showCandidateModal = true;
  }

  // Đóng modal chi tiết
  handleCloseModal() {
    this.showCandidateModal = false;
  }
}
