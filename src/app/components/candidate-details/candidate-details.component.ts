import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
})
export class CandidateDetailsComponent {
  @Input() candidate!: Candidate;
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  isModalOpen = true; // Trạng thái mở/đóng modal

  closeModal() {
    this.show = false;
    this.close.emit();
  }
}
