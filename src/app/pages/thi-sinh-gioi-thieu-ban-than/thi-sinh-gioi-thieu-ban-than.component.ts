import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import BreadcrumbComponent from 'src/app/components/breadcrumb/breadcrumb.component';
import { TuiIcon } from '@taiga-ui/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { InterviewCardComponent } from 'src/app/components/interview-card/interview-card.component';
import { CandidateDetailsComponent } from 'src/app/components/candidate-details/candidate-details.component';

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
  showDetails = false;
  selectedCandidate = {
    name: 'Hoàng Quốc Đạt',
    idCard: '038092881937',
    email: 'hoangdat@gmail.com',
    birthDate: '03/09/1999',
    branch: 'Chi nhánh Long Biên',
    position: 'Giao dịch viên',
  };
}
