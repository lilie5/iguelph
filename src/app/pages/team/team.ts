import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ButtonWithArrowComponent } from '../../button-with-arrow/button-with-arrow';
import { ImageCarousel } from '../../image-carousel/image-carousel';
@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule, ButtonWithArrowComponent, ImageCarousel, CommonModule],
  standalone: true,
  templateUrl: './team.html',
  styleUrls: ['./team.css'],
})
export class About {
  private readonly document = inject(DOCUMENT);

  scrollToSection(sectionId: string): void {
    const target = this.document.getElementById(sectionId);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
