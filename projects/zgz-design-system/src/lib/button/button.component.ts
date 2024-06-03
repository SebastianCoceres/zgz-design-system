import { NgClass, NgIf, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
} from '@angular/core';
import { RemoveAttrsFromSelector } from '../../decorators/RemoveAttrsFromSelector.decorator';
import { BtnIconPosition, BtnVariants } from './button.types';

@Component({
  selector: 'zgz-button',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf],
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
  @Input() loadingIcon: string = 'loader fa-solid fa-spinner';
  @Input() class: string = '';
  @Input() icon: string = '';
  @Input() iconOnly: boolean = false;
  @Input() iconSide: BtnIconPosition = 'left';
  @Input() style: Record<string, any> = {};

  constructor(
    private _elRef: ElementRef,
    private Renderer: Renderer2,
  ) {}

  @RemoveAttrsFromSelector()
  ngOnInit() {}
  classConstructor() {
    const base = { btn: true, [this.class]: true };
    const _class = {
      ...base,
      [`btn-${this.variant}`]: true,
      ['btn-block']: this.isBlock,
      [`btn-${this.size}`]: this.size,
    };

    return _class;
  }

  @HostBinding('class')
  get hostIsBlock() {
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
