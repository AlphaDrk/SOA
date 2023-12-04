// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureListComponent } from './facture-list/facture-list.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { ModifierFactureComponent } from './modifer-facture/modifer-facture.component';
import { ReglementListComponent } from './reglement-list/reglement-list.component';
import { AddReglementComponent } from './add-reglement/add-reglement.component';
import { ModifierReglementComponent } from './modifer-reglements/modifer-reglements.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page route
  { path: 'factures', component: FactureListComponent },
  { path: 'add-facture', component: AddFactureComponent },
  { path: 'edit-facture/:id', component: ModifierFactureComponent },
  { path: 'reglement-facture/:id', component: ReglementListComponent },
  { path: 'reglement-facture/:id/ajouter', component: AddReglementComponent },
  { path: 'reglement-facture/:factureId/modifier/:reglementId', component: ModifierReglementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
