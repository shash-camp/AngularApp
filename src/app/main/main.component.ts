// import { CommonModule } from '@angular/common';
// import { Component, computed, input } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-main',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule],
//   templateUrl: './main.component.html',
//   styleUrl: './main.component.css',
// })
// export class MainComponent {
//   isLeftSidebarCollapsed = input.required<boolean>();
//   screenWidth = input.required<number>();
//   sizeClass = computed(() => {
//     const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
//     if (isLeftSidebarCollapsed) {
//       return '';
//     }
//     return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
//   });
// }

import { Component, computed, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, LeftSidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  screenWidth = signal(window.innerWidth);
  isLeftSidebarCollapsed = signal(this.screenWidth() < 768);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  changeIsLeftSidebarCollapsed(value: boolean) {
    this.isLeftSidebarCollapsed.set(value);
  }

  sizeClass = computed(() => {
    return this.isLeftSidebarCollapsed()
      ? ''
      : this.screenWidth() > 768
        ? 'body-trimmed'
        : 'body-md-screen';
  });
}
