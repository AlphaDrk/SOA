import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router
import { factureService } from '../facture.service';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {
  factures: any[] = [];

  constructor(private factureService: factureService, private router: Router) {}

  ngOnInit(): void {
    this.getFactures();
  }

  getFactures(): void {
    this.factureService.getFactures()
      .subscribe(
        (factures) => {
          console.log(factures);
          this.factures = factures;

          // Calculate montantRestantAPayer for each facture
          this.factures.forEach(facture => {
            facture.montantRestantAPayer = facture.montant - facture.montantPayer;
          });
        },
        error => {
          console.error('Error fetching factures:', error);
        }
      );
  }

  getRowColorClass(facture: any): string {
    if (facture.montantPayer === facture.montant) {
        return 'table-success'; // Green background
    } else if (facture.montantPayer === 0) {
        return 'table-danger'; // Red background
    } else if (facture.montantPayer > 0) {
        return ''; // Yellow background
    } else {
        return ''; // Default or no background color
    }
}

  navigateToAddFacture(): void {
    // Navigate to the add facture page
    this.router.navigate(['/add-facture']);
  }

  // Method to navigate to the edit facture page
  modifierFacture(factureId: number): void {
    this.router.navigate(['/edit-facture', factureId]);  // Assuming "edit-facture" is the route for editing a facture
  }
  voirReglements(factureId: number): void {
    this.router.navigate(['/reglement-facture', factureId]);  // Assuming "edit-facture" is the route for editing a facture
  }
  deleteFacture(factureId: number): void {
    this.factureService.deleteFacture(factureId)
      .subscribe(
        () => {
          // Assuming you want to refresh the facture list after deletion
          this.getFactures();
        },
        error => {
          console.error('Error deleting facture:', error);
        }
      );
  }
}