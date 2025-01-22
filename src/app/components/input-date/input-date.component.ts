import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiError } from '@taiga-ui/core';
import { TuiFieldErrorPipe } from '@taiga-ui/kit';
import {
  TuiInputDateModule,
  TuiTextfieldControllerModule,
  TuiUnfinishedValidator,
} from '@taiga-ui/legacy';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiError,
    TuiFieldErrorPipe,
    TuiInputDateModule,
    TuiTextfieldControllerModule,
    TuiUnfinishedValidator,
  ],
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputDateComponent {
  @Input() control!: FormControl; // Nhận FormControl từ bên ngoài.
  @Output() dateChange = new EventEmitter<TuiDay>(); // Truyền sự kiện khi ngày thay đổi.
  onDateChange(value: TuiDay | null): void {
    if (value) {
      this.dateChange.emit(value); // Phát sự kiện khi giá trị thay đổi.
    }
  }
  protected readonly testForm = new FormGroup({
    testValue: new FormControl(new TuiDay(2017, 0, 15)),
  });
}
