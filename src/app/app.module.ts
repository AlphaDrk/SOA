import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactureListComponent } from './facture-list/facture-list.component';
import { FactureDetailsComponent } from './facture-details/facture-details.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { ReglementListComponent } from './reglement-list/reglement-list.component';
import { ReglementDetailsComponent } from './reglement-details/reglement-details.component';
import { AddReglementComponent } from './add-reglement/add-reglement.component';
import { ModifierFactureComponent } from './modifer-facture/modifer-facture.component';
import { ModifierReglementComponent } from './modifer-reglements/modifer-reglements.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FactureListComponent,
    FactureDetailsComponent,
    AddFactureComponent,
    ReglementListComponent,
    ReglementDetailsComponent,
    AddReglementComponent,
    ModifierFactureComponent,
    ModifierReglementComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
