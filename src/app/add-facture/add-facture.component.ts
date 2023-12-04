// src/app/add-facture/add-facture.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factureService } from '../facture.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  nouvelleFacture: any = {};

  constructor(private factureService: factureService, private router: Router) {}

  ngOnInit(): void {
    // Set the default date to today
    const today = new Date().toISOString().split('T')[0];
    this.nouvelleFacture.date = today;
  }

  ajouterFacture(): void {
    this.factureService.addFacture(this.nouvelleFacture)
      .subscribe(
        facture => {
          console.log('Facture ajoutée avec succès:', facture);
          // Navigating back to the facture list component
          this.router.navigate(['/factures']);
        },
        error => {
          console.error('Erreur lors de l\'ajout de la facture:', error);
        }
      );
  }
}
