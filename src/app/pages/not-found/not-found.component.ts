import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-error-page',
  templateUrl: './not-found.component.html',
  styles: [],
})
export class ErrorPageComponent {
  retryConnection() {
    // Logic xử lý kết nối lại
  }
}
