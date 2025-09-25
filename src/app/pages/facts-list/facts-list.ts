import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatFact, FactService } from '../../services/fact';

@Component({
  selector: 'app-facts-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './facts-list.html',
  styleUrl: './facts-list.scss',
})
export class FactsList {
  name: string = '';
  submitted = false;
  current_page = 1;
  last_page = 0;
  facts: CatFact[] = [];

  constructor(private factService: FactService) {}

  submitName() {
    this.submitted = true;
    this.loadFacts(1);
  }

  loadFacts(page: number) {
    this.factService.getFacts(page).subscribe((response) => {
      this.facts = response.data;
      this.last_page = response.last_page;
      this.current_page = response.current_page;
    });
  }

  nextPage() {
    if (this.current_page < this.last_page) {
      this.current_page++;
      this.loadFacts(this.current_page);
    }
  }

  previousPage() {
    if (this.current_page > 1) {
      this.current_page--;
      this.loadFacts(this.current_page);
    }
  }
}
