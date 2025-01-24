import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamOutsideComponent } from './exam-outside.component';

describe('ExamOutsideComponent', () => {
  let component: ExamOutsideComponent;
  let fixture: ComponentFixture<ExamOutsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExamOutsideComponent]
    });
    fixture = TestBed.createComponent(ExamOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
