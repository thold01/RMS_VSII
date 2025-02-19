import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLiCauHoiComponent } from './quan-li-cau-hoi.component';

describe('QuanLiCauHoiComponent', () => {
  let component: QuanLiCauHoiComponent;
  let fixture: ComponentFixture<QuanLiCauHoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuanLiCauHoiComponent]
    });
    fixture = TestBed.createComponent(QuanLiCauHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
