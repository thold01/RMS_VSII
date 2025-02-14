import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiSinhGioiThieuBanThanComponent } from './thi-sinh-gioi-thieu-ban-than.component';

describe('ThiSinhGioiThieuBanThanComponent', () => {
  let component: ThiSinhGioiThieuBanThanComponent;
  let fixture: ComponentFixture<ThiSinhGioiThieuBanThanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ThiSinhGioiThieuBanThanComponent]
    });
    fixture = TestBed.createComponent(ThiSinhGioiThieuBanThanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
