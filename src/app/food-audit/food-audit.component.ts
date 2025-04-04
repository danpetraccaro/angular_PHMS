import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-audit',
  imports: [CommonModule, RouterModule],
  templateUrl: './food-audit.component.html',
  styleUrl: './food-audit.component.scss'

})
export class FoodAuditComponent {

  
constructor(private route: ActivatedRoute) {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('Premises ID:', id);
}

}
