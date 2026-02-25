import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html',
  standalone: true,
  imports: [NgIf],
})
export class HelloWorldNgIfComponent {
  message = "I'm read only!";
  canEdit = true;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
