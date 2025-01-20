import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-room-input',
  templateUrl: './room-input.component.html',
  styles: [],
})
export class RoomInputComponent {
  roomCode: string = '';
  showError: boolean = false;

  validateRoomCode() {
    this.showError = this.roomCode !== '123456';
  }
}
