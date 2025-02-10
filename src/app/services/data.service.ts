import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Để có thể dùng service trong toàn bộ ứng dụng
})
export class DataService {
  private subject = new BehaviorSubject<any>(null); // Subject để truyền dữ liệu

  sendData(data: any) {
    this.subject.next(data); // Phát dữ liệu
  }

  getData() {
    return this.subject.asObservable(); // Nhận dữ liệu
  }
}
