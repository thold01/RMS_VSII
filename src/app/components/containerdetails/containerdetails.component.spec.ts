import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerdetailsComponent } from './containerdetails.component';

describe('ContainerdetailsComponent', () => {
  let component: ContainerdetailsComponent;
  let fixture: ComponentFixture<ContainerdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContainerdetailsComponent]
    });
    fixture = TestBed.createComponent(ContainerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
