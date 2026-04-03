import {
  ChangeDetectionStrategy,
  Component,
  signal
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, NavItem } from './navbar/navbar';
import { FixedBackgroundImage } from './fixed-background-image/fixed-background-image';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FixedBackgroundImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {

  protected readonly title = signal('igem_guelph_website');

  navItems: NavItem[] = [
    { text: 'Team', link: '/about', icon: 'info' },
    { text: 'Our Projects', link: '/projects', icon: 'science' },
    { text: 'Our Sponsors', link: '/sponsors', icon: 'volunteer_activism' },
    { text: 'Recruitment', link: '/recruitment', icon: 'groups' }
  ];
}
