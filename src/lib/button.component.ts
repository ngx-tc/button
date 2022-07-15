import { Component, HostBinding, Input } from '@angular/core';
import { size, TcSize, TcView, view } from '@ngx-tc/base';

@Component({
  selector: '[tc-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements TcView, TcSize {
  @HostBinding('class') get class() {
    return 'tc-btn';
  };
  @HostBinding('class.btn-block') @Input() block: boolean = false;
  @HostBinding('class.btn-square') @Input() square: boolean = false;
  @HostBinding('class.btn-disabled') @Input() disabled: boolean = false;
  @HostBinding('class.btn-load') @Input() load: boolean = false;
  @HostBinding('class.btn-outline') @Input() outline: boolean = false;
  @HostBinding('class.btn-icon-animation') @Input() iconAnimation: boolean = false;
  @HostBinding('class.btn-left') get alignLeft() { return this.align === 'left' };
  @HostBinding('class.btn-right') get alignRight() { return this.align === 'right' };
  @HostBinding('class.btn-sm') get sizeSm() { return this.tcSize === size.sm };
  @HostBinding('class.btn-lg') get sizeLg() { return this.tcSize === size.lg };
  @HostBinding('class.btn-primary') get viewDefault() { return this.tcView === view.primary };
  @HostBinding('class.btn-accent') get viewAccent() { return this.tcView === view.accent };
  @HostBinding('class.btn-info') get viewInfo() { return this.tcView === view.info };
  @HostBinding('class.btn-success') get viewSuccess() { return this.tcView === view.success };
  @HostBinding('class.btn-warning') get viewWarning() { return this.tcView === view.warning };
  @HostBinding('class.btn-error') get viewError() { return this.tcView === view.error };

  @Input('view') tcView: string | view = view.primary;
  @Input('size') tcSize: string | size = size.default;
  @Input() align: string = 'center';
  @Input() tcLineStyle: string;
  @Input() beforeIcon: string;
  @Input() afterIcon: string;
}
