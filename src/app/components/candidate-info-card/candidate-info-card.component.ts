import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
// import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-candidate-info-card',
  standalone: true,
  imports: [CommonModule, TuiIcon],
  templateUrl: './candidate-info-card.component.html',
  styleUrls: ['./candidate-info-card.component.scss'],
})
export class CandidateInfoCardComponent {
  @Input() candidate: any;
  @Output() viewDetail = new EventEmitter<void>();

  onViewDetail() {
    this.viewDetail.emit();
  }
}
