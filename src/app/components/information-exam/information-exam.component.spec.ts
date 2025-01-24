import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationExamComponent } from './information-exam.component';

describe('InformationExamComponent', () => {
  let component: InformationExamComponent;
  let fixture: ComponentFixture<InformationExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InformationExamComponent]
    });
    fixture = TestBed.createComponent(InformationExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
