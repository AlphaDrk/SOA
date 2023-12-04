// reglement-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReglementService } from '../reglement.service';

@Component({
  selector: 'app-reglement-list',
  templateUrl: './reglement-list.component.html',
  styleUrls: ['./reglement-list.component.css']
})
export class ReglementListComponent implements OnInit {
  factureId: number | undefined;
  reglements: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reglementService: ReglementService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.factureId = params['id'];
      this.loadReglements();
    });
  }

  loadReglements() {
    if (this.factureId) {
      this.reglementService.getReglementsForFacture(this.factureId).subscribe(
        data => {
          this.reglements = data;
        },
        error => {
          console.error('Error loading reglements:', error);
        }
      );
    }
  }

  navigateToAddReglement() {
    if (this.factureId) {
      this.router.navigate(['/reglement-facture', this.factureId, 'ajouter']);
    }
  }

  modifierReglement(reglementId: number) {
    if (this.factureId) {
      this.router.navigate(['/reglement-facture', this.factureId, 'modifier', reglementId]);
    }
  }

  supprimerReglement(reglementId: number) {
    if (this.factureId) {
      this.reglementService.supprimerReglement(reglementId).subscribe(
        data => {
          console.log('Reglement deleted successfully:', data);
          this.loadReglements();
        },
        error => {
          console.error('Error deleting reglement:', error);
        }
      );
    }
  }
}
