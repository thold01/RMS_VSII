import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExamComponent } from './details-exam.component';

describe('DetailsExamComponent', () => {
  let component: DetailsExamComponent;
  let fixture: ComponentFixture<DetailsExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailsExamComponent]
    });
    fixture = TestBed.createComponent(DetailsExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
