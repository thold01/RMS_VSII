import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentRoute: string = '';
  users = [
    { userId: '123456', name: 'Hoàng Văn Thuận' }
  ];

  private routeSub: Subscription | any

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.routeSub = this.router.events.subscribe(() => {
      this.checkRoute();
    });
    this.checkRoute();  // Check route ngay khi component được khởi tạo
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();  // Hủy đăng ký khi component bị hủy
  }

  private checkRoute(): void {
    // Kiểm tra URL hiện tại, và xem nó có chứa 'details'
    this.currentRoute = this.router.url;
  }
}
