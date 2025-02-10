import { AsyncPipe, NgForOf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiButton, TuiFormatNumberPipe, TuiTextfield } from '@taiga-ui/core';
import { TuiButtonSelect } from '@taiga-ui/kit';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  standalone: true,
  selector: 'app-table',
  imports: [
    AsyncPipe,
    FormsModule,
    NgForOf,
    TuiButton,
    TuiButtonSelect,
    TuiFormatNumberPipe,
    TuiTable,
    TuiTextfield,
    CustomButtonComponent,
    CustomButtonComponent,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TableComponent {
  @Input() data: any[] = []; // Nhận danh sách dữ liệu từ component cha
  @Input() headers: string[] = [];
  @Output() joinTestEvent = new EventEmitter<any>(); // Phát sự kiện khi nhấn nút "Tham gia"

  joinTest(item: any) {
    this.joinTestEvent.emit(item); // Gửi dữ liệu ra component cha
  }
}
