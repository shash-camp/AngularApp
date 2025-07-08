import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [CommonModule], // ✅ Must be here for ngClass
})
export class HeaderComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
}
