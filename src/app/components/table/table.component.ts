import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Inject,
  Input,
  Output,
  TemplateRef,
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
    CommonModule,
    NgForOf,
    NgIf,
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
  @Input() data: any[] = [];
  @Input() headers: string[] = [];
  @Input() columns: { key: string; label: string; hasBorder?: boolean }[] = [];
  @Input() actionTemplate?: TemplateRef<any>; // Template tùy chỉnh (VD: Button)
  // @ContentChild('actionTemplate') actionTemplate!: TemplateRef<any>;
}
