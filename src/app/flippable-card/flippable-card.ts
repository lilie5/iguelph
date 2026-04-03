import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flippable-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flippable-card.html',
  styleUrl: './flippable-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlippableCardComponent {
  title = input.required<string>();
  description = input.required<string>();

  isFlipped = signal(false);

  toggleFlip() {
    this.isFlipped.update((value) => !value);
  }
}
