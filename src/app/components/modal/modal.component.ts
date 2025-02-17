import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private router: Router) {}

  close() {
    this.closeModal.emit();
  }

  open() {
    this.isOpen = true;
  }

  // close() {
  //   this.isOpen = false;
  // }

  confirm() {
    this.router.navigate(['/introduce']);
  }
}
