import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierReglementComponent } from './modifer-reglements.component';

describe('ModiferReglementsComponent', () => {
  let component: ModifierReglementComponent;
  let fixture: ComponentFixture<ModifierReglementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierReglementComponent]
    });
    fixture = TestBed.createComponent(ModifierReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
