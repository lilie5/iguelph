import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-with-arrow',
  imports: [MatIconModule, RouterLink],
  template: `
    @if (href()) {
      <a class="arrow-button" [href]="href()" target="_blank" rel="noopener noreferrer">
        <span class="button-label">{{ text() }}</span>
        <mat-icon class="button-arrow" aria-hidden="true">arrow_right_alt</mat-icon>
      </a>
    } @else if (routerLink()) {
      <a class="arrow-button" [routerLink]="routerLink()">
        <span class="button-label">{{ text() }}</span>
        <mat-icon class="button-arrow" aria-hidden="true">arrow_right_alt</mat-icon>
      </a>
    } @else {
      <button class="arrow-button" type="button">
        <span class="button-label">{{ text() }}</span>
        <mat-icon class="button-arrow" aria-hidden="true">arrow_right_alt</mat-icon>
      </button>
    }
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      .arrow-button {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid #dd6b20;
        border-radius: 999px;
        background: transparent;
        color: #dd6b20;
        cursor: pointer;
        font: inherit;
      }

      .button-label,
      .button-arrow {
        transition: transform 180ms ease;
      }

      .button-label {
        display: inline-block;
      }

      .button-arrow {
        width: 20px;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
      }

      .arrow-button:hover .button-label,
      .arrow-button:focus-visible .button-label {
        transform: scale(1.05);
      }

      .arrow-button:hover .button-arrow,
      .arrow-button:focus-visible .button-arrow {
        transform: translateX(4px);
      }

      .arrow-button:focus-visible {
        outline: 2px solid rgba(221, 107, 32, 0.45);
        outline-offset: 2px;
      }

      a.arrow-button {
        text-decoration: none;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonWithArrowComponent {
  readonly text = input('Learn More');
  readonly href = input<string | undefined>(undefined);
  readonly routerLink = input<string | undefined>(undefined);
}