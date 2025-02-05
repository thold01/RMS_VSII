import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputDateModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { TuiButton } from '@taiga-ui/core';
import { TuiDay } from '@taiga-ui/cdk/date-time';
import { Input } from '@angular/core';

@Component({
  selector: 'app-inputdate',
  standalone: true,
  imports:  [ReactiveFormsModule, TuiInputDateModule, CommonModule,TuiTextfieldControllerModule],
  templateUrl: './inputdate.component.html',
  styleUrls: ['./inputdate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class InputdateComponent {
  selectedDate: string = '';  // Biến để lưu giá trị ngày
  @Input() nameDate:string = ''
  testForm = new FormGroup({
    testValue: new FormControl(null),
});

}
