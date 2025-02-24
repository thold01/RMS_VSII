import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomInputComponent } from '../../components/room-input/room-input.component';
import { InputTextComponent } from '../../components/input-text/input-text.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import SearchInputComponent from "../../components/search-input/search-input.component";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    InputTextComponent,
    ReactiveFormsModule,
    CustomButtonComponent,
    SearchInputComponent
],
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginPageComponent {
  enterRoom() {
    // Logic xử lý khi nhấn "Vào phòng"
    console.log('Enter room');
  }
}
