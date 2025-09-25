import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  private fact_api = 'https://catfact.ninja/fact';
  private facts_api = 'https://catfact.ninja/facts?page=';

  constructor(private http: HttpClient) {}

  getFact(): Observable<CatFact> {
    return this.http.get<CatFact>(this.fact_api);
  }

  getFacts(page: number): Observable<AllCatFacts> {
    return this.http.get<AllCatFacts>(this.facts_api+page);
  }
}

export interface CatFact {
  fact: string;
  length?: number;  
}

export interface AllCatFacts {
  current_page: number;
  data: CatFact[];
  last_page: number;
  per_page: number;
  total: number;
}
