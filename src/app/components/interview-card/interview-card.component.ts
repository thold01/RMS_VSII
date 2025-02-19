import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from "../dropdown-button/dropdown-button.component";
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { Candidate } from 'src/app/models/candidate.model';

@Component({
  selector: 'app-interview-card',
  standalone: true,
  imports: [CommonModule, DropDownComponent, CustomButtonComponent],
  templateUrl: './interview-card.component.html',
  styleUrls: ['./interview-card.component.scss'],
})
export class InterviewCardComponent {
  @Input() candidate!: Candidate;
  @Output() viewDetails = new EventEmitter<void>();
}
