import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExamInfomationComponent } from './form-exam-infomation.component';

describe('FormExamInfomationComponent', () => {
  let component: FormExamInfomationComponent;
  let fixture: ComponentFixture<FormExamInfomationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormExamInfomationComponent]
    });
    fixture = TestBed.createComponent(FormExamInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
