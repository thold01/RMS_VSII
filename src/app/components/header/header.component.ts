import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBadge } from '@taiga-ui/kit';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TuiBadge],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
