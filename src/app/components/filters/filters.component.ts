import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EMPTY_QUERY, TuiDay } from '@taiga-ui/cdk';
import { TuiButton, TuiError, TuiTextfield } from '@taiga-ui/core';
import { TuiFieldErrorPipe, TuiItemsWithMore, TuiUnfinishedValidator } from '@taiga-ui/kit';
import { TuiSearch } from '@taiga-ui/layout';
import { TuiInputDateModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import InputDateComponent from '../input-date/input-date.component';
import DropdownButtonComponent from '../dropdown-button/dropdown-button.component';
import SearchInputComponent from '../search-input/search-input.component';

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
    DropdownButtonComponent,
    SearchInputComponent
  ],
  templateUrl: './filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FiltersComponent {
  protected readonly filters = new FormArray([
    new FormControl(),
    new FormControl(),
    new FormControl(new TuiDay(2023, 0, 1)),
    new FormControl(new TuiDay(2023, 0, 1)),
  ]);

  protected readonly form = new FormGroup({ filters: this.filters });
  protected readonly controls = EMPTY_QUERY;
  onDateSelected(index: number, date: TuiDay): void {
    console.log(`Ngày được chọn ở filter ${index}:`, date);
  }
  isDropdownButtonVisible: boolean = true;
}
