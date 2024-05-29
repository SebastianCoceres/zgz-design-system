import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from 'ZgzComponents';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  title = 'zgz-ds-showcase';
}
