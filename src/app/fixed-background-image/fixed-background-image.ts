import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-fixed-background-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fixed-background-image.html',
  styleUrl: './fixed-background-image.css',
  host: {
    role: 'presentation',
    'aria-hidden': 'true',
    '[style.background-image]': 'backgroundImage()',
    '[style.opacity]': 'opacity()'
  }
})
export class FixedBackgroundImage {
  readonly src = input<string>('');
  readonly opacity = input<string>('1');

  readonly backgroundImage = computed(() => {
    const imageSrc = this.src().trim();
    return imageSrc ? `url('${imageSrc}')` : 'none';
  });

  readonly hasFallbackImage = computed(() => this.src().trim().length > 0);
}
