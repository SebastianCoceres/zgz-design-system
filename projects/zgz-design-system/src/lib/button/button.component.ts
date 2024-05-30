import {
  ChangeDetectionStrategy,
  Component,
  Renderer2,
  HostBinding,
  Input,
  ElementRef,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'zgz-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() variant: BtnVariants = 'default';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() size: 'sm' | 'md' | 'lg' | null = null;
  @Input() isBlock: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() class: string = '';

  constructor(
    private _elRef: ElementRef,
    private Renderer: Renderer2,
  ) {}

  ngOnInit() {
    const attributes = Object.getOwnPropertyNames(this);
    for (let i = 0; i < attributes.length; i++) {
      this.Renderer.removeAttribute(this._elRef.nativeElement, attributes[i]);
    }
  }

  classConstructor() {
    const base = { btn: true, [this.class]: true };
    const _class = {
      ...base,
      [`btn-${this.variant}`]: true,
      'btn-loading': this.loading,
      'btn-block': this.isBlock,
      [`btn-${this.size}`]: this.size,
    };

    return _class;
  }

  @HostBinding('class')
  get hostBlock() {
    return this.isBlock ? 'w-100' : null;
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
