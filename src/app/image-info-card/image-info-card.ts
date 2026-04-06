import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ButtonWithArrowComponent } from '../button-with-arrow/button-with-arrow';

@Component({
  selector: 'app-image-info-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, ButtonWithArrowComponent],
  templateUrl: './image-info-card.html',
  styleUrl: './image-info-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageInfoCardComponent {
  title = input.required<string>();
  text = input.required<string>();
  imagePath = input.required<string>();
  href = input<string>('');
  date = input<string>('');
  alignRight = input<boolean>(false);
  goldStar = input<boolean>(false);
}
