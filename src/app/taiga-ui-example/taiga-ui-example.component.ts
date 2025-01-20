import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiIcon, TuiLabel, TuiTitle } from '@taiga-ui/core';
import { TuiCheckbox, TuiTooltip } from '@taiga-ui/kit';

@Component({
  selector: 'test',
  standalone: true,
  exportAs: "Example1",
  imports: [ReactiveFormsModule, TuiCheckbox, TuiIcon, TuiLabel, TuiTitle, TuiTooltip],
  templateUrl: './taiga-ui-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
  protected testForm = new FormGroup({
    testValue1: new FormControl(true),
    testValue2: new FormControl(false),
    testValue3: new FormControl(false),
  });
}
