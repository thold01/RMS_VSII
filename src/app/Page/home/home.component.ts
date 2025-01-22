import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from "../../components/input-text/input-text.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InputTextComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
