import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'zgz-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LinkComponent {
  @Input() href: string = '';
  @Input() target: string = '';

  constructor() {}
}
