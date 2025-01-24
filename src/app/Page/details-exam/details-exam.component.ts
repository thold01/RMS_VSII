import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIcon } from '@taiga-ui/core';
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { ExamOutsideComponent } from "../../components/exam-outside/exam-outside.component";
import { ContainerdetailsComponent } from "../../components/containerdetails/containerdetails.component";
import { InformationExamComponent } from "../../components/information-exam/information-exam.component";
import { FormExamInfomationComponent } from "../../components/form-exam-infomation/form-exam-infomation.component";
import { TableComponent } from "../../components/table/table.component";
import { Router } from '@angular/router';
import { LoadingPageComponent } from "../../components/loading-page/loading-page.component";
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-details-exam',
  standalone: true,
  imports: [CommonModule, TuiIcon, ButtonsComponent, ExamOutsideComponent, ContainerdetailsComponent, InformationExamComponent, FormExamInfomationComponent, TableComponent, LoadingPageComponent, ModalComponent],
  templateUrl: './details-exam.component.html',
  styleUrls: ['./details-exam.component.scss']
})
export class DetailsExamComponent {
   data = [
     {stt:1,name:'Lê Anh Khuê',unit:'Chi nhánh Long Biên'},
     {stt:2,name:'Trần Hải Nam',unit:'Chi nhánh Long Biên'},
     {stt:3,name:'Lương Nhật Trường',unit:'Chi nhánh Long Biên'},
     {stt:4,name:'Trần Nguyệt Minh Khôi',unit:'Chi nhánh Long Biên'},
     {stt:5,name:'Lương Nhật Trường',unit:'Chi nhánh Long Biên'},
   ]
   dataColumnnames = [
    { field: 'stt', header: 'STT' },
    { field: 'name', header: 'Họ và tên' },
    { field: 'unit', header: 'Đơn vị ứng tuyển' },
   ]
   isLoading:boolean = false
   constructor(private router:Router){}
   onClick(){
     this.isLoading = true
     setTimeout(() => {
      this.router.navigate(['/']);
      this.isLoading = false;
    }, 2000);
   }
   
}
