import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsList } from './facts-list';

describe('FactsList', () => {
  let component: FactsList;
  let fixture: ComponentFixture<FactsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
