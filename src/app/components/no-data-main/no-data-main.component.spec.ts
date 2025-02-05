import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataMainComponent } from './no-data-main.component';

describe('NoDataMainComponent', () => {
  let component: NoDataMainComponent;
  let fixture: ComponentFixture<NoDataMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoDataMainComponent]
    });
    fixture = TestBed.createComponent(NoDataMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
