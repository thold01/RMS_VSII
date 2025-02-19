import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToFraction',
  standalone: true,
})
export class DecimalToFractionPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value) || !isFinite(value)) {
      return value.toString();
    }

    if (value >= 9.0) {
      return '4/4'; // Thêm trường hợp mới
    } else if (value >= 8.5) {
      return '3/4';
    } else if (value >= 7.0) {
      return '2/4';
    } else if (value >= 5.0) {
      return '2/4';
    } else if (value >= 2.0) {
      return '1/4';
    } else {
      return '0/4';
    }
  }
}
