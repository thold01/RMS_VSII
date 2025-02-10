import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiHint, TuiTextfield } from '@taiga-ui/core';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    FormsModule,
    TuiHint,
    TuiInputModule,
    TuiTextfield,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchInputComponent {
  protected value = '';
  ngOnInit() {
    console.log('valueSearch: ', this.value);
  }
  @Input() placeholder: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  ngOnChange() {
    console.log('filter data: ', this.value);
  }
  onSearch() {
    this.searchEvent.emit(this.value);
  }
}
