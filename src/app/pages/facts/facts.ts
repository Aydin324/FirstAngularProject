import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CatFact, FactService } from '../../services/fact';

@Component({
  selector: 'app-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facts.html',
  styleUrl: './facts.scss',
})
export class Facts {
  fact = signal<CatFact | null>(null);

  constructor(private factService: FactService) {
    this.fetchFact();
  }

  fetchFact() {
    this.factService.getFact().subscribe((f) => this.fact.set(f));
  }
}
