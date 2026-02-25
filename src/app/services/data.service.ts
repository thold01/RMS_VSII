import { Injectable, signal, computed, effect } from '@angular/core';

/**
 * 🎯 DATA SERVICE VỚI SIGNAL
 * ==========================
 * Service này demo các pattern phổ biến khi dùng Signal
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  /**
   * 📦 SIGNAL CƠ BẢN
   * ================
   * Thay thế BehaviorSubject bằng signal()
   * - Đơn giản hơn, không cần import từ rxjs
   * - Không cần quản lý subscription
   */
  private _data = signal<any>(null);
  readonly data = this._data.asReadonly();

  /**
   * 📊 LOADING STATE
   * ================
   * Signal rất phù hợp để quản lý UI state
   */
  private _isLoading = signal(false);
  readonly isLoading = this._isLoading.asReadonly();

  /**
   * ❌ ERROR STATE
   */
  private _error = signal<string | null>(null);
  readonly error = this._error.asReadonly();

  /**
   * 🧮 COMPUTED: TRẠNG THÁI TỔNG HỢP
   * =================================
   * Computed signal tự động cập nhật khi dependencies thay đổi
   * Ở đây: status phụ thuộc vào isLoading, error, và data
   */
  readonly status = computed(() => {
    if (this._isLoading()) return 'loading';
    if (this._error()) return 'error';
    if (this._data()) return 'success';
    return 'idle';
  });

  // Kiểm tra có dữ liệu không
  readonly hasData = computed(() => this._data() !== null);

  /**
   * 📝 SET DATA
   * ===========
   * .set() thay thế hoàn toàn giá trị cũ
   */
  sendData(data: any): void {
    this._data.set(data);
  }

  /**
   * 🔄 UPDATE DATA
   * ==============
   * .update() nhận function với giá trị cũ, trả về giá trị mới
   * Hữu ích khi cập nhật một phần của object
   */
  updateData(partialData: Partial<any>): void {
    this._data.update((current) => ({
      ...current,
      ...partialData,
    }));
  }

  /**
   * 📖 GET DATA
   * ===========
   * Đọc giá trị bằng cách gọi signal như function
   */
  getData(): any {
    return this._data();
  }

  /**
   * 🔄 ASYNC OPERATION VỚI SIGNAL
   * =============================
   * Pattern phổ biến: quản lý loading/error/data
   */
  async fetchData(apiCall: () => Promise<any>): Promise<void> {
    this._isLoading.set(true);
    this._error.set(null);

    try {
      const result = await apiCall();
      this._data.set(result);
    } catch (err) {
      this._error.set(err instanceof Error ? err.message : 'Có lỗi xảy ra');
    } finally {
      this._isLoading.set(false);
    }
  }

  /**
   * 🧹 RESET STATE
   */
  reset(): void {
    this._data.set(null);
    this._isLoading.set(false);
    this._error.set(null);
  }
}
