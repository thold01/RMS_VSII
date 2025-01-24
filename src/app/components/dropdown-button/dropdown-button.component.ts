import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  standalone: true,
  selector: 'app-dropdown-button',
  imports: [CommonModule, TuiIcon, CustomButtonComponent, NgIf],
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
})
export class DropDownComponent {

  @Input() data!: any;
  @Input() isCheckBox: boolean = false
  @Input() placehoder: string = ''
  @Input() isIcon: boolean = false

  isOpen = false;


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  cancelSelection() {
    this.data.forEach((status: { selected: boolean; }) => status.selected = false);  // Bỏ chọn tất cả
    this.isOpen = false;
  }
}
