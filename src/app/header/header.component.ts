import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule,RouterModule], // ✅ Must be here for ngClass
})
export class HeaderComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
}
