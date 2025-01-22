import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-text',
standalone: true,
  imports: [CommonModule,TuiIcon],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

@Input() iconName: string = '';  // Tên icon mặc định là 'search'
@Input() placeholder: string = '';  
value: string = '';  
}
