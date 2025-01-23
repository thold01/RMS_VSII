import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiItem } from '@taiga-ui/cdk';
import { TuiLink } from '@taiga-ui/core';
import { TuiBreadcrumbs } from '@taiga-ui/kit';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgFor, RouterLink, TuiBreadcrumbs, TuiItem, TuiLink],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BreadcrumbComponent {
  protected items = [
    {
      caption: 'Danh sách kì thi',
      routerLink: '/',
    },
    {
      caption: 'Chi tiết kì thi',
      routerLink: '/detail',
    }
  ];
}

