import { Injectable, signal, computed } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root',
})
export class CandidateStateService {
  /**
   * 🎯 SIGNAL CƠ BẢN
   * ================
   * signal() tạo một "reactive container" chứa giá trị
   * - Khi giá trị thay đổi, tất cả nơi sử dụng sẽ tự động cập nhật
   * - Không cần subscribe/unsubscribe như BehaviorSubject
   */
  private _candidate = signal<Candidate | null>(null);

  /**
   * 🔒 READONLY SIGNAL
   * ==================
   * asReadonly() tạo phiên bản chỉ đọc của signal
   * - Component chỉ có thể ĐỌC, không thể THAY ĐỔI trực tiếp
   * - Đảm bảo data flow một chiều (one-way data flow)
   * - Giống như việc expose Observable thay vì BehaviorSubject
   */
  readonly candidate = this._candidate.asReadonly();

  /**
   * 🧮 COMPUTED SIGNAL
   * ==================
   * computed() tạo signal phái sinh từ signal khác
   * - Tự động tính toán lại khi signal gốc thay đổi
   * - Cache kết quả - chỉ tính lại khi cần
   * - Rất hữu ích cho derived state
   */
  readonly candidateName = computed(() => {
    const c = this._candidate();
    return c ? c.name : 'Chưa chọn thí sinh';
  });

  // Kiểm tra xem có candidate được chọn không
  readonly hasCandidate = computed(() => this._candidate() !== null);

  /**
   * 📝 CẬP NHẬT SIGNAL
   * ==================
   * .set() - Đặt giá trị mới hoàn toàn
   * .update() - Cập nhật dựa trên giá trị cũ (xem ví dụ bên dưới)
   */
  setCandidate(candidate: Candidate): void {
    this._candidate.set(candidate);
  }

  // Xóa candidate đã chọn
  clearCandidate(): void {
    this._candidate.set(null);
  }

  /**
   * 🔄 UPDATE METHOD
   * ================
   * Dùng khi cần cập nhật dựa trên giá trị hiện tại
   * Ví dụ: cập nhật một field của candidate
   */
  updateCandidateField<K extends keyof Candidate>(
    field: K,
    value: Candidate[K]
  ): void {
    this._candidate.update((current) => {
      if (!current) return null;
      return { ...current, [field]: value };
    });
  }

  /**
   * 📖 ĐỌC GIÁ TRỊ SIGNAL
   * =====================
   * Gọi signal như function: signal()
   * Tương đương với .getValue() của BehaviorSubject
   */
  getCandidate(): Candidate | null {
    return this._candidate();
  }
}
