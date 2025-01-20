import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomInputComponent } from '../../components/room-input/room-input.component';

@Component({
  standalone: true,
  imports: [CommonModule, RoomInputComponent],
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginPageComponent {
  enterRoom() {
    // Logic xử lý khi nhấn "Vào phòng"
  }
}
