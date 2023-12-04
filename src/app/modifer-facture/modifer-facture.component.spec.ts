import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFactureComponent } from './modifer-facture.component';

describe('ModiferFactureComponent', () => {
  let component: ModifierFactureComponent;
  let fixture: ComponentFixture<ModifierFactureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierFactureComponent]
    });
    fixture = TestBed.createComponent(ModifierFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
