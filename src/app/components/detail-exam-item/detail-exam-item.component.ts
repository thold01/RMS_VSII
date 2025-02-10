import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-exam-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-exam-item.component.html',
  styleUrls: ['./detail-exam-item.component.scss'],
})
export class DetailExamItemComponent {
  @Input() label: string = '';
}
