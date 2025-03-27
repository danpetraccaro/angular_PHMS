import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { routes } from './app/app.routes';
import { MatCardModule } from '@angular/material/card';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatCardModule],
  template: `
    <div class="container">
      <h1>PHISE</h1>
      
      <div class="flex-container">
        <div>
          <a [routerLink]="['/surveillance']" class="card-link">
            <mat-card>
              <mat-card-header>
                <div>
                  <span class="material-symbols-outlined page-link-icon" style="color: #006cff">
                    Dining
                  </span>
                </div>
              </mat-card-header>
              <mat-card-content>
                Food<br />
                Surveillance
              </mat-card-content>
            </mat-card>
          </a>
        </div>

        <div>
          <a [routerLink]="['/audit']" class="card-link">
            <mat-card>
              <mat-card-header>
                <div>
                  <span class="material-symbols-outlined page-link-icon" style="color: #006cff">
                    Lunch_Dining
                  </span>
                </div>
              </mat-card-header>
              <mat-card-content>
                Food<br />
                Audit
              </mat-card-content>
            </mat-card>
          </a>
        </div>
      </div>

      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
});