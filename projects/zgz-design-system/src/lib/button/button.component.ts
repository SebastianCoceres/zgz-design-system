import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'zgz-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() variant: BtnVariants = 'default';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() size: 'sm' | 'md' | 'lg' | undefined = undefined;
  @Input() isBlock: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  constructor() {}

  get classConstructor() {
    return {
      btn: true,
      [`btn-${this.variant}`]: true,
      'btn-loading': this.loading,
      'btn-block': this.isBlock,
      [`btn-${this.size}`]: this.size,
    };
  }

  @HostBinding('class')
  get hostClasses() {
    return this.isBlock ? 'w-100' : '';
  }

  @HostBinding('attr.disabled')
  get hostDisabled() {
    return this.disabled ? true : null;
  }

  @HostBinding('attr.loading')
  get hostLoading() {
    return this.loading ? true : null;
  }
}

export type BtnVariants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';
