import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '',
  host: {
    role: 'presentation',
    'aria-hidden': 'true',
    '[style.position]': '"absolute"',
    '[style.pointer-events]': '"none"',
    '[style.display]': '"block"',
    '[style.background-color]': 'backgroundColor()',
    '[style.width]': 'width()',
    '[style.height]': 'height()'
  }
})
export class Line {
  readonly backgroundColor = input<string>('#d9c7ad');
  readonly width = input<string>('240px');
  readonly height = input<string>('2px');
}