import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule, TuiIcon, ButtonsComponent, NgIf],
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

   @Input() data!: any;
   @Input() isCheckBox : boolean = false
   @Input() placehoder:string = ''
   @Input() isIcon:boolean = false

   isOpen = false;


  // Hàm mở/đóng dropdown
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Hàm xử lý khi nhấn nút "Huỷ"
  cancelSelection() {
    this.data.forEach((status: { selected: boolean; }) => status.selected = false);  // Bỏ chọn tất cả
    this.isOpen = false;  // Đóng dropdown
  }
}
