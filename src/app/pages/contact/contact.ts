import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ImageCarousel } from '../../image-carousel/image-carousel';
import { ButtonWithArrowComponent } from '../../button-with-arrow/button-with-arrow';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ImageCarousel,
    ButtonWithArrowComponent,
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  private readonly document = inject(DOCUMENT);
  private readonly snackBar = inject(MatSnackBar);

  name = '';
  email = '';
  subject = '';
  message = '';

  scrollToSection(sectionId: string): void {
    const target = this.document.getElementById(sectionId);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  submitForm(): void {
    if (!this.name || !this.email || !this.message) return;

    const mailto = `mailto:igem@uoguelph.ca?subject=${encodeURIComponent(this.subject || 'iGEM Guelph Inquiry')}&body=${encodeURIComponent(`Name: ${this.name}\nEmail: ${this.email}\n\n${this.message}`)}`;
    window.open(mailto, '_self');

    this.snackBar.open('Opening your mail client...', 'Dismiss', { duration: 3000 });
  }
}