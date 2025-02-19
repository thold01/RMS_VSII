import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-panel.component.html',
  styleUrls: ['./question-panel.component.scss'],
})
export class QuestionPanelComponent {
  @Input() question: any = null;
  @Input() timeLeft: string = '00:00';
}
