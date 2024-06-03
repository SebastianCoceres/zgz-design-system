import { Component } from '@angular/core';
import { ButtonComponent } from 'ZgzComponents';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './buttons.page.component.html',
  styleUrls: [],
})
export class ButtonsPageComponent {
  loading: boolean = false;

  onLoading() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
