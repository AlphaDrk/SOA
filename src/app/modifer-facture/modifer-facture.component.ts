import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../modal/facture';
import { factureService } from '../facture.service';

@Component({
  selector: 'app-modifier-facture', // Correct selector
  templateUrl: './modifer-facture.component.html',
  styleUrls: ['./modifer-facture.component.css']
})

export class ModifierFactureComponent implements OnInit {
  facture: Facture = {
    idF: 0,
    date: '',
    client: '',
    montant: 0,
    montantRestantAPayer: 0,
    montantPayer: 0
  };

  constructor(
    private factureService: factureService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Use '+' to convert the string to a number, and handle the case where it might be undefined
    const factureId = +this.route.snapshot.params['id'];

    if (!isNaN(factureId)) {
      this.factureService.getFactureById(factureId)
        .subscribe(
          (facture) => {
            this.facture = facture;

            // Set the default date value to the existing date
            this.facture.date = this.facture.date ? this.facture.date : new Date().toISOString().split('T')[0];
          },
          error => {
            console.error('Error fetching facture details:', error);
          }
        );
    } else {
      console.error('Facture ID is not a valid number');
    }
  }

  modifierFacture(): void {
    if (this.facture.idF !== undefined) {
      this.factureService.updateFacture(this.facture.idF, this.facture)
        .subscribe(
          () => {
            this.router.navigate(['/factures']);
          },
          error => {
            console.error('Error updating facture:', error);
          }
        );
    } else {
      console.error('Facture ID is undefined');
    }
  }
}
