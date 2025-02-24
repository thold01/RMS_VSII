import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() type: 'search' | 'cancel' | 'join' | 'confirm' | 'pagination' =
    'confirm';
  @Input() label: string = '';
  @Input() iconUrl: string = '';
  @Input() redirectUrl: string = ''; // URL để chuyển hướng
  @Input() disabled: boolean = false;
  @Input() item: any;

  @Output() buttonClick = new EventEmitter<any>();

  constructor(private router: Router) {}

  onClick() {
    this.buttonClick.emit(this.item); // Gửi dữ liệu khi click

    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    }
  }
}
