import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper } from '@taiga-ui/kit';
import { TuiMultiSelectModule } from '@taiga-ui/legacy';

@Component({
  standalone: true,
  selector: 'app-dropdown-button',
  imports: [
    ReactiveFormsModule,
    TuiButton,
    TuiChevron,
    TuiDataListWrapper,
    TuiDropdown,
    TuiMultiSelectModule,
    CommonModule
  ],
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DropdownButtonComponent {
  protected readonly form = new FormGroup({
    control: new FormControl<string[]>([]),
  });

  protected open = false;

  protected readonly items = ['Tất cả trạng thái', 'Chưa bắt đầu', 'Đang thực hiện', 'Đã hoàn thành'];

  get length(): number {
    return this.value.length || 0;
  }

  get text(): string {
    switch (this.length) {
      case 1:
        return this.value[0] ?? '';
      default:
        return `${this.length} selected`;
    }
  }

  private get value(): readonly string[] {
    return this.form.get('control')?.value || [];
  }

  protected onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;
    const selected = new Set(this.value);

    if (checkbox.checked) {
      selected.add(value);
    } else {
      selected.delete(value);
    }

    this.form.get('control')?.setValue(Array.from(selected));
  }

  protected isChecked(item: string): boolean {
    return this.value.includes(item);
  }

  protected cancel(): void {
    this.form.reset();
    this.open = false;
  }

  protected confirm(): void {
    this.open = false;
  }
}
