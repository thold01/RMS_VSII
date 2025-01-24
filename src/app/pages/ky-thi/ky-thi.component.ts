import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import TableComponent from "../../components/table/table.component";
import FiltersComponent from "../../components/filters/filters.component";
import { TuiBadge } from '@taiga-ui/kit';

@Component({
  selector: 'ky-thi',
  standalone: true,
  imports: [CommonModule, TableComponent, FiltersComponent, TuiBadge],
  templateUrl: './ky-thi.component.html',
  styleUrls: ['./ky-thi.component.scss']
})
export class ChooseExamComponent {

}
