import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaladeCardComponent } from './balade-card.component';

describe('BaladeCardComponent', () => {
  let component: BaladeCardComponent;
  let fixture: ComponentFixture<BaladeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaladeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaladeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
