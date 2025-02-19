import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root',
})
export class CandidateStateService {
  // BehaviorSubject khởi tạo với null hoặc giá trị mặc định
  private candidateSubject = new BehaviorSubject<Candidate | null>(null);

  // Observable để các component subscribe
  candidate$: Observable<Candidate | null> =
    this.candidateSubject.asObservable();

  // Hàm để cập nhật candidate
  setCandidate(candidate: Candidate): void {
    this.candidateSubject.next(candidate);
  }

  // Hàm để lấy giá trị hiện tại (nếu cần)
  getCandidate(): Candidate | null {
    return this.candidateSubject.value;
  }
}
