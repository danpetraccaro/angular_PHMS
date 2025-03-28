import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
    imports: [CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatExpansionModule,
        MatMenuModule,
        MatListModule,
        MatDialogModule,
        MatButtonModule,
        RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
    
    @Input('title') title = '';
    @Input('icon') icon = '';

    private router = inject(Router);


    firstName: string = '';

    constructor() {
        this.firstName = sessionStorage.getItem('UNM') ?? '';
    }

    openMyDetails() {
        const dialogConfig = new MatDialogConfig();
        //dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = 600;
        dialogConfig.maxWidth = 800;

    }


    openChangePassword() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = 200;
        dialogConfig.maxWidth = 400;

    }


    
}
