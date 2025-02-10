import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { EMPTY_QUERY, TuiDay } from '@taiga-ui/cdk';
import { TuiButton, TuiError, TuiTextfield } from '@taiga-ui/core';
import {
  TuiFieldErrorPipe,
  TuiItemsWithMore,
  TuiUnfinishedValidator,
} from '@taiga-ui/kit';
import { TuiSearch } from '@taiga-ui/layout';
import {
  TuiInputDateModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import InputDateComponent from '../../components/input-date/input-date.component';
import { DropDownComponent } from '../../components/dropdown-button/dropdown-button.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import SearchInputComponent from '../../components/search-input/search-input.component';

@Component({
  standalone: true,
  selector: 'app-filters',
  imports: [
    JsonPipe,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    TuiButton,
    TuiItemsWithMore,
    TuiSearch,
    TuiTextfield,
    AsyncPipe,
    ReactiveFormsModule,
    TuiError,
    TuiFieldErrorPipe,
    TuiInputDateModule,
    TuiTextfieldControllerModule,
    TuiUnfinishedValidator,
    InputDateComponent,
    CustomButtonComponent,
    SearchInputComponent,
    DropDownComponent,
  ],
  templateUrl: './filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FiltersComponent {
  
  @Output() searchEvent = new EventEmitter<string>();

  protected readonly filters = new FormArray([
    new FormControl(),
    new FormControl(),
    new FormControl(new TuiDay(2023, 0, 1)),
    new FormControl(new TuiDay(2023, 0, 1)),
  ]);

  protected readonly form = new FormGroup({ filters: this.filters });
  protected readonly controls = EMPTY_QUERY;

  dataSelect1 = [
    { value: 'item1', label: 'Tất cả trạng thái', selected: false },
    { value: 'item2', label: 'Chưa bắt đầu', selected: false },
    { value: 'item3', label: 'Đang thực hiện', selected: false },
    { value: 'item4', label: 'Đã hoàn thành', selected: false },
  ];
  onDateSelected(index: number, date: TuiDay): void {
    console.log(`Ngày được chọn ở filter ${index}:`, date);
  }

  onSearch(searchValue: string) {
    this.searchEvent.emit(searchValue);
  }
  isDropdownButtonVisible: boolean = true;
}
