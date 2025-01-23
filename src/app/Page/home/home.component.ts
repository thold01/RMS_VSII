import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from "../../components/input-text/input-text.component";
import { TableComponent } from "../../components/table/table.component";
import { InputdateComponent } from "../../components/inputdate/inputdate.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { DropDownComponent } from "../../components/drop-down/drop-down.component";
import { PaginationpageComponent } from "../../components/paginationpage/paginationpage.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, InputTextComponent, TableComponent, InputdateComponent, ButtonsComponent, DropDownComponent, PaginationpageComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dataSelect1 = [
      {value:'item1',label:'Tất cả trạng thái',selected:false},
      {value:'item2',label:'Chưa bắt đầu',selected:false},
      {value:'item3',label:'Đang thực hiện',selected:false},
      {value:'item4',label:'Đã hoàn thành',selected:false}
     ]

  dataSelect2 = [
    {value:2,label:'2',selected:false},
    {value:4,label:'4',selected:false},
    {value:6,label:'6',selected:false},
    {value:10,label:'10',selected:false},
  ]
}
