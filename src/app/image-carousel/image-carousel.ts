import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

type CollageImage = {
  src: string;
  alt: string;
};

type TileSpan = {
  colSpan: number;
  rowSpan: number;
};

type GridTile = CollageImage & TileSpan;

@Component({
  selector: 'app-image-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatGridListModule],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css',
})
export class ImageCarousel {
  readonly images = input<string[]>([]);
  readonly tileSpans = input<TileSpan[]>([]);
  readonly gridColumns = 12;
  readonly gridRowHeight = '76px';
  readonly gridGutter = '0px';

  readonly collageImages = computed<CollageImage[]>(() =>
    this.images()
      .map((src) => src.trim())
      .filter((src) => src.length > 0)
      .map((src, index) => ({
        src,
        alt: this.buildAltText(src, index)
      }))
  );

  readonly gridTiles = computed<GridTile[]>(() => {
    const images = this.collageImages();
    const defaultSpans = this.getDefaultSpans(images.length);
    const customSpans = this.tileSpans();

    return images.map((image, index) => {
      const fallbackSpan = defaultSpans[index] ?? { colSpan: 4, rowSpan: 3 };
      const customSpan = customSpans[index];
      const colSpan = customSpan ? this.clampSpan(customSpan.colSpan, this.gridColumns) : fallbackSpan.colSpan;
      const rowSpan = customSpan ? this.clampSpan(customSpan.rowSpan, 12) : fallbackSpan.rowSpan;

      return {
        ...image,
        colSpan,
        rowSpan,
      };
    });
  });

  private getDefaultSpans(count: number): TileSpan[] {
    if (count <= 1) {
      return [{ colSpan: 12, rowSpan: 8 }];
    }

    if (count === 2) {
      return [
        { colSpan: 6, rowSpan: 6 },
        { colSpan: 6, rowSpan: 6 },
      ];
    }

    if (count === 3) {
      return [
        { colSpan: 8, rowSpan: 6 },
        { colSpan: 4, rowSpan: 3 },
        { colSpan: 4, rowSpan: 3 },
      ];
    }

    if (count === 4) {
      return [
        { colSpan: 7, rowSpan: 6 },
        { colSpan: 5, rowSpan: 3 },
        { colSpan: 5, rowSpan: 3 },
        { colSpan: 12, rowSpan: 3 },
      ];
    }

    if (count === 5) {
      return [
        { colSpan: 6, rowSpan: 4 },
        { colSpan: 6, rowSpan: 4 },
        { colSpan: 4, rowSpan: 3 },
        { colSpan: 4, rowSpan: 3 },
        { colSpan: 4, rowSpan: 3 },
      ];
    }

    return Array.from({ length: count }, (_, index) => {
      const patternIndex = index % 6;

      if (patternIndex === 0) {
        return { colSpan: 6, rowSpan: 4 };
      }

      if (patternIndex === 1 || patternIndex === 2) {
        return { colSpan: 3, rowSpan: 2 };
      }

      return { colSpan: 4, rowSpan: 3 };
    });
  }

  private clampSpan(value: number, max: number): number {
    const normalized = Number.isFinite(value) ? Math.floor(value) : 1;
    return Math.min(Math.max(normalized, 1), max);
  }

  private buildAltText(source: string, index: number): string {
    const fileName = source.split('/').pop() ?? '';
    const title = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ').trim();

    if (title.length > 0) {
      return title;
    }

    return `gallery image ${index + 1}`;
  }
}
