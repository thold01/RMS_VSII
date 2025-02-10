import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExamItemComponent } from './detail-exam-item.component';

describe('DetailExamItemComponent', () => {
  let component: DetailExamItemComponent;
  let fixture: ComponentFixture<DetailExamItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailExamItemComponent]
    });
    fixture = TestBed.createComponent(DetailExamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
