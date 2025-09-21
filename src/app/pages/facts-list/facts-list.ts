import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-facts-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './facts-list.html',
  styleUrl: './facts-list.scss',
})
export class FactsList {
  name: string = '';
  submitted = false;

  submitName() {
    this.submitted = true;
  }
}
