import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationExamComponent } from "../information-exam/information-exam.component";
import { FormExamInfomationComponent } from "../form-exam-infomation/form-exam-infomation.component";

@Component({
  selector: 'app-containerdetails',
  standalone: true,
  imports: [CommonModule, InformationExamComponent, FormExamInfomationComponent],
  templateUrl: './containerdetails.component.html',
  styleUrls: ['./containerdetails.component.scss']
})
export class ContainerdetailsComponent {

}
