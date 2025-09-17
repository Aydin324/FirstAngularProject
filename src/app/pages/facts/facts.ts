import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { startWith, Subject, switchMap } from 'rxjs';
import { CatFact, FactService } from '../../services/fact';
import { toSignal } from '@angular/core/rxjs-interop';

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
    this.fetchFact(); // trigger the first fetch immediately
  }

  fetchFact() {
    this.factService.getFact().subscribe((f) => this.fact.set(f));
  }
}
