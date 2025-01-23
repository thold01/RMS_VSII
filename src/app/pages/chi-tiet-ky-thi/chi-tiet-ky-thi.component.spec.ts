import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietKyThiComponent } from './chi-tiet-ky-thi.component';

describe('ChiTietKyThiComponent', () => {
  let component: ChiTietKyThiComponent;
  let fixture: ComponentFixture<ChiTietKyThiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChiTietKyThiComponent]
    });
    fixture = TestBed.createComponent(ChiTietKyThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
