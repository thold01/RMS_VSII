import {
  Component,
  signal,
  computed,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidateStateService } from 'src/app/services/candidate-state.service';
import { Candidate } from 'src/app/models/candidate.model';

/**
 * 🎓 SIGNAL DEMO COMPONENT
 * ========================
 * Component này demo tất cả các tính năng của Signal trong Angular
 */
@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold mb-6">🎯 Angular Signal Demo</h1>

      <!-- ========================================== -->
      <!-- 1️⃣ SIGNAL CƠ BẢN -->
      <!-- ========================================== -->
      <section class="mb-8 p-4 bg-blue-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">1️⃣ Signal Cơ Bản</h2>
        
        <p class="mb-2">
          <strong>Count:</strong> {{ count() }}
        </p>
        
        <!-- 
          📝 GHI CHÚ:
          - Trong template, đọc signal bằng cách gọi như function: count()
          - Khi signal thay đổi, Angular tự động re-render phần này
        -->
        
        <div class="flex gap-2 mt-4">
          <button
            (click)="increment()"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Tăng (+1)
          </button>
          <button
            (click)="decrement()"
            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Giảm (-1)
          </button>
          <button
            (click)="reset()"
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </section>

      <!-- ========================================== -->
      <!-- 2️⃣ COMPUTED SIGNAL -->
      <!-- ========================================== -->
      <section class="mb-8 p-4 bg-green-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">2️⃣ Computed Signal</h2>
        
        <p class="mb-2">
          <strong>Count gấp đôi:</strong> {{ doubled() }}
        </p>
        <p class="mb-2">
          <strong>Count gấp ba:</strong> {{ tripled() }}
        </p>
        <p class="mb-2">
          <strong>Là số chẵn?</strong> {{ isEven() ? 'Có ✅' : 'Không ❌' }}
        </p>
        
        <!-- 
          📝 GHI CHÚ:
          - computed() tạo signal phái sinh từ signal khác
          - Tự động tính lại khi count thay đổi
          - Kết quả được cache - không tính lại nếu count không đổi
        -->
      </section>

      <!-- ========================================== -->
      <!-- 3️⃣ TWO-WAY BINDING VỚI SIGNAL -->
      <!-- ========================================== -->
      <section class="mb-8 p-4 bg-yellow-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">3️⃣ Two-way Binding</h2>
        
        <input
          type="text"
          [value]="name()"
          (input)="updateName($event)"
          class="border p-2 rounded w-full mb-2"
          placeholder="Nhập tên..."
        />
        
        <p class="mb-2">
          <strong>Tên:</strong> {{ name() }}
        </p>
        <p class="mb-2">
          <strong>Độ dài tên:</strong> {{ nameLength() }} ký tự
        </p>
        <p class="mb-2">
          <strong>Chữ hoa:</strong> {{ nameUppercase() }}
        </p>
      </section>

      <!-- ========================================== -->
      <!-- 4️⃣ SIGNAL VỚI OBJECT -->
      <!-- ========================================== -->
      <section class="mb-8 p-4 bg-purple-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">4️⃣ Signal với Object</h2>
        
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium mb-1">Tên sản phẩm:</label>
            <input
              type="text"
              [value]="product().name"
              (input)="updateProductName($event)"
              class="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Giá:</label>
            <input
              type="number"
              [value]="product().price"
              (input)="updateProductPrice($event)"
              class="border p-2 rounded w-full"
            />
          </div>
        </div>
        
        <div class="bg-white p-3 rounded border">
          <p><strong>Tên:</strong> {{ product().name }}</p>
          <p><strong>Giá:</strong> {{ product().price | number }} VNĐ</p>
          <p><strong>Giá sau thuế (10%):</strong> {{ priceWithTax() | number }} VNĐ</p>
        </div>
      </section>

      <!-- ========================================== -->
      <!-- 5️⃣ SIGNAL VỚI ARRAY -->
      <!-- ========================================== -->
      <section class="mb-8 p-4 bg-pink-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">5️⃣ Signal với Array</h2>
        
        <div class="flex gap-2 mb-4">
          <input
            type="text"
            #newItem
            class="border p-2 rounded flex-1"
            placeholder="Thêm item mới..."
            (keyup.enter)="addItem(newItem.value); newItem.value = ''"
          />
          <button
            (click)="addItem(newItem.value); newItem.value = ''"
            class="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            Thêm
          </button>
        </div>
        
        <p class="mb-2"><strong>Tổng số items:</strong> {{ itemCount() }}</p>
        
        <ul class="list-disc list-inside">
          <li *ngFor="let item of items()" class="flex justify-between items-center py-1">
            {{ item }}
            <button
              (click)="removeItem(item)"
              class="text-red-500 hover:text-red-700 text-sm"
            >
              Xóa
            </button>
          </li>
        </ul>
        
        <p *ngIf="items().length === 0" class="text-gray-500 italic">Chưa có item nào</p>
      </section>

      <!-- ========================================== -->
      <!-- 6️⃣ SỬ DỤNG SERVICE VỚI SIGNAL -->
      <!-- ========================================== -->
      <section class="mb-8 p-4 bg-orange-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">6️⃣ Service với Signal</h2>
        
        <button
          (click)="selectSampleCandidate()"
          class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 mb-4"
        >
          Chọn Thí sinh mẫu
        </button>
        
        <div class="bg-white p-3 rounded border">
          <p><strong>Có thí sinh?</strong> {{ candidateService.hasCandidate() ? 'Có ✅' : 'Không ❌' }}</p>
          <p><strong>Tên thí sinh:</strong> {{ candidateService.candidateName() }}</p>
          
          <div *ngIf="candidateService.candidate() as candidate" class="mt-2 pt-2 border-t">
            <p><strong>Email:</strong> {{ candidate.email }}</p>
            <p><strong>Vị trí:</strong> {{ candidate.position }}</p>
          </div>
        </div>
        
        <!-- 
          📝 GHI CHÚ:
          - candidateService.candidate() là readonly signal
          - candidateService.candidateName() là computed signal
          - Không cần subscribe, Angular tự động cập nhật
        -->
      </section>

      <!-- ========================================== -->
      <!-- 7️⃣ EFFECT - SIDE EFFECTS -->
      <!-- ========================================== -->
      <section class="mb-8 p-4 bg-indigo-50 rounded-lg">
        <h2 class="text-xl font-semibold mb-4">7️⃣ Effect (Xem Console)</h2>
        
        <p class="text-sm text-gray-600 mb-4">
          Effect chạy mỗi khi signal thay đổi. Mở Console (F12) để xem log.
        </p>
        
        <p><strong>Count hiện tại:</strong> {{ count() }}</p>
        <p><strong>Lịch sử thay đổi:</strong></p>
        <ul class="list-disc list-inside text-sm">
          <li *ngFor="let log of effectLogs()">{{ log }}</li>
        </ul>
      </section>
    </div>
  `,
})
export class SignalDemoComponent implements OnInit {
  /**
   * 💉 INJECT SERVICE
   * =================
   * Dùng inject() thay vì constructor injection
   * Phong cách mới trong Angular standalone components
   */
  candidateService = inject(CandidateStateService);

  // ========================================
  // 1️⃣ SIGNAL CƠ BẢN
  // ========================================
  /**
   * signal<T>(initialValue) - Tạo signal với giá trị khởi tạo
   * T là kiểu dữ liệu (có thể tự suy luận)
   * 
   * 💡 Để persist data sau F5, đọc từ localStorage
   */
  count = signal(this.loadFromStorage('count', 0));

  // ========================================
  // 2️⃣ COMPUTED SIGNALS
  // ========================================
  /**
   * computed(() => expression) - Tạo signal phái sinh
   * - Tự động theo dõi dependencies (count trong trường hợp này)
   * - Chỉ tính lại khi dependencies thay đổi
   * - Kết quả được cache
   */
  doubled = computed(() => this.count() * 2);
  tripled = computed(() => this.count() * 3);
  isEven = computed(() => this.count() % 2 === 0);

  // ========================================
  // 3️⃣ SIGNAL VỚI STRING
  // ========================================
  name = signal('');
  nameLength = computed(() => this.name().length);
  nameUppercase = computed(() => this.name().toUpperCase());

  // ========================================
  // 4️⃣ SIGNAL VỚI OBJECT
  // ========================================
  product = signal({
    name: 'iPhone 15',
    price: 25000000,
  });
  priceWithTax = computed(() => this.product().price * 1.1);

  // ========================================
  // 5️⃣ SIGNAL VỚI ARRAY
  // ========================================
  items = signal<string[]>(['Angular', 'Signal', 'RxJS']);
  itemCount = computed(() => this.items().length);

  // ========================================
  // 7️⃣ EFFECT LOGS
  // ========================================
  effectLogs = signal<string[]>([]);

  constructor() {
    /**
     * 🔄 EFFECT
     * =========
     * effect() tạo side effect chạy khi signal thay đổi
     * - Dùng cho logging, localStorage, API calls, etc.
     * - Tự động theo dõi signals được đọc trong callback
     * - Tự động cleanup khi component destroy
     * 
     * ⚠️ LƯU Ý: Nếu muốn update signal khác trong effect,
     * cần thêm { allowSignalWrites: true }
     */
    effect(() => {
      const currentCount = this.count();
      console.log(`📊 Count changed to: ${currentCount}`);

      // 💾 TỰ ĐỘNG LƯU VÀO LOCALSTORAGE KHI COUNT THAY ĐỔI
      // Đây là lý do effect rất hữu ích - side effects như lưu storage!
      this.saveToStorage('count', currentCount);

      // Thêm vào log history
      const timestamp = new Date().toLocaleTimeString();
      this.effectLogs.update((logs) => [
        ...logs.slice(-4), // Giữ 5 logs gần nhất
        `[${timestamp}] Count = ${currentCount}`,
      ]);
    }, { allowSignalWrites: true }); // 👈 Cần thêm option này để update signal trong effect

    // Effect theo dõi nhiều signals
    effect(() => {
      const name = this.name();
      const product = this.product();
      if (name || product.name) {
        console.log(`👤 Name: ${name}, 📦 Product: ${product.name}`);
      }
    });
  }

  ngOnInit() {
    console.log('🚀 SignalDemoComponent initialized');
  }

  // ========================================
  // METHODS CẬP NHẬT SIGNAL
  // ========================================

  /**
   * .set(value) - Đặt giá trị mới hoàn toàn
   */
  increment() {
    this.count.set(this.count() + 1);
    // Hoặc dùng update: this.count.update(c => c + 1);
  }

  /**
   * .update(fn) - Cập nhật dựa trên giá trị hiện tại
   * fn nhận giá trị cũ, trả về giá trị mới
   */
  decrement() {
    this.count.update((current) => current - 1);
  }

  reset() {
    this.count.set(0);
  }

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }

  /**
   * Cập nhật một field trong object signal
   * Phải tạo object mới (immutability)
   */
  updateProductName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.product.update((p) => ({ ...p, name: input.value }));
  }

  updateProductPrice(event: Event) {
    const input = event.target as HTMLInputElement;
    this.product.update((p) => ({ ...p, price: Number(input.value) }));
  }

  /**
   * Thêm item vào array signal
   * Phải tạo array mới (immutability)
   */
  addItem(item: string) {
    if (!item.trim()) return;
    this.items.update((list) => [...list, item.trim()]);
  }

  removeItem(item: string) {
    this.items.update((list) => list.filter((i) => i !== item));
  }

  /**
   * Sử dụng service với signal
   */
  selectSampleCandidate() {
    const sampleCandidate: Candidate = {
      name: 'Nguyễn Văn A',
      idCard: '012345678901',
      email: 'nguyenvana@example.com',
      dob: '01/01/1995',
      major: 'Công nghệ thông tin',
      gender: 'Nam',
      height: 175,
      weight: 70,
      experience: 5,
      brand: 'Chi nhánh Hà Nội',
      position: 'Lập trình viên',
      issueDate: '01/01/2020',
      issuePlace: 'CA Hà Nội',
      address: '123 Đường ABC, Hà Nội',
      phone: '0912345678',
      university: 'Đại học Bách Khoa',
      degree: 'Kỹ sư',
      grade: 'Giỏi',
      graduationScore: 8.5,
      degreeType: 'Chính quy',
      education: {
        highSchool: [],
        university: 'Đại học Bách Khoa',
        degree: 'Kỹ sư CNTT',
        grade: 'Giỏi',
        graduationScore: 8.5,
        degreeType: 'Chính quy',
      },
      jobs: [],
      awards: [],
    };

    this.candidateService.setCandidate(sampleCandidate);
  }

  // ========================================
  // 💾 HELPER: PERSIST DATA VỚI LOCALSTORAGE
  // ========================================
  /**
   * 📖 Đọc data từ localStorage
   * Signal KHÔNG tự lưu data - cần kết hợp với localStorage
   */
  private loadFromStorage<T>(key: string, defaultValue: T): T {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        return JSON.parse(stored) as T;
      } catch {
        return defaultValue;
      }
    }
    return defaultValue;
  }

  /**
   * 💾 Lưu data vào localStorage
   */
  private saveToStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
