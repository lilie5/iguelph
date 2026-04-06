import { Component } from '@angular/core';
import { ImageInfoCardComponent } from '../../image-info-card/image-info-card';
import { MatCardModule } from '@angular/material/card';
import { ImageCarousel } from '../../image-carousel/image-carousel';
import { DOCUMENT } from '@angular/core';
import { inject } from '@angular/core';
import { MatAccordion } from "@angular/material/expansion";
import { ButtonWithArrowComponent } from "../../button-with-arrow/button-with-arrow";

@Component({
  selector: 'app-projects',
  imports: [ImageInfoCardComponent, MatCardModule, ImageCarousel, MatAccordion, ButtonWithArrowComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  private document: Document = inject(DOCUMENT);

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
