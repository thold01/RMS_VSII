import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],  // Thêm TgaTabsModule vào imports
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  list = [
    {id: 1,icon:'/assets/ChartIcon.png', name: 'Danh sách', active: true, link: 'list'},
    {id: 2,icon:'/assets/BuldetList.png', name: 'Quản trị', active: false, link: 'manager'}
  ];

  setActive(id: number) {
    this.list.forEach(item => item.active = item.id === id);
  }
}
