import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from '../toolbar/toolbar.component'; // ✅ Update path if needed

@Component({
  selector: 'app-food-surveillance',
  standalone: true, // ✅ This is required
  imports: [
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './food-surveillance.component.html',
  styleUrls: ['./food-surveillance.component.scss'] // ✅ fixed typo
})
export class FoodSurveillanceComponent {}