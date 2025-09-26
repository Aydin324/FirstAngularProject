import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
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
  loading = false;

  constructor(private factService: FactService, private cdr: ChangeDetectorRef) {}

  submitName() {
    this.submitted = true;
    this.loadFacts(1);
  }

  loadFacts(page: number) {
    this.loading = true;
    this.factService.getFacts(page).subscribe((response) => {
      this.facts = response.data;
      this.last_page = response.last_page;
      this.current_page = response.current_page;
      this.loading = false;
      this.cdr.detectChanges();
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
