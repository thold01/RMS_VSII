import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCardComponent } from './interview-card.component';

describe('InterviewCardComponent', () => {
  let component: InterviewCardComponent;
  let fixture: ComponentFixture<InterviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InterviewCardComponent]
    });
    fixture = TestBed.createComponent(InterviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
