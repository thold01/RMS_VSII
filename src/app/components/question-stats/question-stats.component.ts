import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBadge } from '@taiga-ui/kit';

interface StatDetail {
  name: string;
  status: string; // "Đã trả lời", "Chưa trả lời", v.v.
}

@Component({
  selector: 'app-question-stats',
  standalone: true,
  imports: [CommonModule, TuiBadge],
  templateUrl: './question-stats.component.html',
  styleUrls: ['./question-stats.component.scss'],
})
export class QuestionStatsComponent {
  @Input() stats: {
    answered: number;
    unanswered: number;
    detail: StatDetail[];
  } = {
    answered: 0,
    unanswered: 0,
    detail: [],
  };
}
