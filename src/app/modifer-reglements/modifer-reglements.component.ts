// modifier-reglement.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReglementService } from '../reglement.service';

@Component({
  selector: 'app-modifier-reglements',
  templateUrl: './modifer-reglements.component.html',
  styleUrls: ['./modifer-reglements.component.css']
})
export class ModifierReglementComponent implements OnInit {
  reglementId: number | undefined;
  reglement: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reglementService: ReglementService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.reglementId = params['reglementId'];
      this.loadReglement();
    });
  }

  loadReglement() {
    if (this.reglementId) {
      this.reglementService.getReglementById(this.reglementId).subscribe(
        data => {
          this.reglement = data;
        },
        error => {
          console.error('Error loading reglement:', error);
        }
      );
    }
  }

  updateReglement() {
    if (this.reglementId) {
      this.reglementService.updateReglement(this.reglementId, this.reglement).subscribe(
        data => {
          console.log('Reglement updated successfully:', data);
          this.router.navigate(['/reglement-facture', this.reglement.facture.idF]);
        },
        error => {
          console.error('Error updating reglement:', error);
        }
      );
    }
  }
}
