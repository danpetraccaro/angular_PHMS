import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // ✅ Import this

@Component({
  selector: 'app-food-audit',
  standalone: true,
  imports: [RouterLink], // ✅ Add RouterLink here
  templateUrl: './food-audit.component.html',
  styleUrls: ['./food-audit.component.scss']
})
export class FoodAuditComponent {}