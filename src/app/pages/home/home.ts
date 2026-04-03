import { Component, inject, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ImageCarousel } from '../../image-carousel/image-carousel';
import { ButtonWithArrowComponent } from '../../button-with-arrow/button-with-arrow';
import { FlippableCardComponent } from '../../flippable-card/flippable-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, ImageCarousel, ButtonWithArrowComponent, FlippableCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  private readonly document = inject(DOCUMENT);

  showSubLists = signal(true);

  toggleSubLists(): void {
    this.showSubLists.update(v => !v);
  }

  openIgemWebsite(): void {
    window.open('https://www.igem.org/', '_blank', 'noopener,noreferrer');
  }

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
