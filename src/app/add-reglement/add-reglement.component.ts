import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReglementService } from '../reglement.service';

@Component({
  selector: 'app-add-reglement',
  templateUrl: './add-reglement.component.html',
  styleUrls: ['./add-reglement.component.css']
})
export class AddReglementComponent {
  factureId: number | undefined;
  reglement: any = { dateR: new Date().toISOString().split('T')[0] }; // Set the default date to today

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reglementService: ReglementService
  ) {
    this.route.params.subscribe(params => {
      this.factureId = params['id'];
    });
  }

  addReglement() {
    if (this.factureId) {
      // Set the facture ID for the payment
      this.reglement.facture = { idF: this.factureId };

      // Call the service to add the payment
      this.reglementService.addReglement(this.reglement).subscribe(
        data => {
          console.log('Payment added successfully:', data);
          // Optionally, navigate to the payment list after adding
          this.router.navigate(['/reglement-facture', this.factureId]);
        },
        error => {
          console.error('Error adding payment:', error);
        }
      );
    }
  }
}
