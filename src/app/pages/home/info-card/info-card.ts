import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-info-card',
  imports: [MatCardModule],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})
export class InfoCard {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundColor: string = '';
  @Input() sideBorderColor: string = 'rgb(160, 0, 0)';
}
