import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

@Injectable({
  providedIn: 'root'
})
export class ReglementService {
  constructor(private http: HttpClient) {}

  getReglements(): Observable<any[]> {
    return this.http.get<any[]>(`${API_BASE_URL}/reglements`);
  }

  getReglementsForFacture(factureId: number): Observable<any[]> {
    return this.http.get<any[]>(`${API_BASE_URL}/reglements/factures/${factureId}`);
  }

  getReglement(id: number): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/reglements/${id}`);
  }

  addReglement(reglement: any): Observable<any> {
    return this.http.post<any>(`${API_BASE_URL}/reglements`, reglement);
  }
  getReglementById(id: number): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/reglements/${id}`);
  }
  updateReglement(id: number, reglement: any): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/reglements/${id}`, reglement);
  }
  supprimerReglement(id: number): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/reglements/${id}`);
  }
}
