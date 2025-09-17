import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  private api = 'https://catfact.ninja/fact';

  constructor(private http: HttpClient) {}

  getFact(): Observable<CatFact> {
    return this.http.get<CatFact>(this.api);
  }
}

export interface CatFact {
  fact: string;
  length?: number;  
}
