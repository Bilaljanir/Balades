import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaladeDetailPageComponent } from './balade-detail-page.component';

describe('BaladeDetailPageComponent', () => {
  let component: BaladeDetailPageComponent;
  let fixture: ComponentFixture<BaladeDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaladeDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaladeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
