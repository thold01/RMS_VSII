import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormExamInfomationComponent } from "../form-exam-infomation/form-exam-infomation.component";

@Component({
  selector: 'app-information-exam',
  standalone: true,
  imports: [CommonModule, FormExamInfomationComponent],
  templateUrl: './information-exam.component.html',
  styleUrls: ['./information-exam.component.scss']
})
export class InformationExamComponent {

}
