import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-form-exam-infomation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-exam-infomation.component.html',
  styleUrls: ['./form-exam-infomation.component.scss']
})
export class FormExamInfomationComponent {
   @Input() labelExam:string = ''
   @Input() nameExam:string  = ''
}
