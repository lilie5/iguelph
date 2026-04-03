import { Component } from '@angular/core';
import { ImageCarousel } from '../../image-carousel/image-carousel';
import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ButtonWithArrowComponent } from "../../button-with-arrow/button-with-arrow";
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-recruitment',
  imports: [ImageCarousel, MatExpansionModule, ButtonWithArrowComponent, MatIcon],
  templateUrl: './recruitment.html',
  styleUrls: ['./recruitment.css'],
})
export class Recruitment {
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
