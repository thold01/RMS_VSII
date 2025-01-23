import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-paginationpage',
  standalone: true,
  imports: [CommonModule, TuiPagination],
  templateUrl: './paginationpage.component.html',
  styleUrls: ['./paginationpage.component.scss']
})
export class PaginationpageComponent {
  protected length = 64;
  protected index = 10;
  protected goToPage(index: number): void {
    this.index = index;
    console.info('New page:', index);
  }
}
