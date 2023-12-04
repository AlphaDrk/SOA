// src/app/services/facture.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from './modal/facture';


@Injectable({
  providedIn: 'root'
})
export class factureService {
  
  // Url du service web de gestion de produits
  // commune pour toutes les méthodes
  urlHote="http://localhost:8080/factures";

  constructor(private http :HttpClient)
  {

  }

  getFactures() :Observable<Array<Facture>>
  {
    return this.http.get<Array<Facture>>(this.urlHote, {
      headers: { 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' },
      withCredentials: true  // Add this line
    });
    
  }
  addFacture(nouvelleFacture: any): Observable<Facture> {
    return this.http.post<Facture>(this.urlHote, nouvelleFacture, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
  }

  getFactureById(id: number): Observable<Facture> {
    const url = `${this.urlHote}/${id}`;
    return this.http.get<Facture>(url, {
      headers: { 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' },
      withCredentials: true
    });
  }

  updateFacture(id: number, facture: Facture): Observable<Facture> {
    const url = `${this.urlHote}/${id}`;
    return this.http.put<Facture>(url, facture, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
  }
  deleteFacture(id: number): Observable<void> {
    const url = `${this.urlHote}/${id}`;
    return this.http.delete<void>(url, {
      headers: { 'Access-Control-Allow-Origin': '*', 'Accept': 'application/json' },
      withCredentials: true
    });
  }

}
