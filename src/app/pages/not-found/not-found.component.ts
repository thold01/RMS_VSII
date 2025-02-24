import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";

@Component({
  standalone: true,
  imports: [CommonModule, CustomButtonComponent],
  selector: 'app-error-page',
  templateUrl: './not-found.component.html',
  styles: [],
})
export class ErrorPageComponent {
onButtonClick() {
throw new Error('Method not implemented.');
}
  retryConnection() {
    // Logic xử lý kết nối lại
  }
}
