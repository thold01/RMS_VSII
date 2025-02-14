import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
})
export class CandidateDetailsComponent {
  @Input() candidate: any;
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
}
