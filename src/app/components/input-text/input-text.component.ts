import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, TuiIcon, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() iconName: string = '';
  @Input() placeholder: string = '';
  value: string = '';

  clearValue() {
    this.value = ''
  }
}
