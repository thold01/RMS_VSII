import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() type: 'search' | 'cancel' | 'join' | 'confirm' = 'confirm';
  @Input() label: string = '';
  @Input() iconUrl: string = '';
  @Input() disabled: boolean = false;
}
