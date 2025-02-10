import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  FiltersComponent  from "../../layouts/filters/filters.component";
import { TuiBadge } from '@taiga-ui/kit';


@Component({
  selector: 'app-no-data',
  standalone: true,
  imports: [CommonModule, FiltersComponent, TuiBadge],
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent {

}
