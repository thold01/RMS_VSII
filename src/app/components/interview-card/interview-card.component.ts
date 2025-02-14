import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interview-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interview-card.component.html',
  styleUrls: ['./interview-card.component.scss'],
})
export class InterviewCardComponent {
  @Input() candidate: any;
  @Output() viewDetails = new EventEmitter<void>();
}
