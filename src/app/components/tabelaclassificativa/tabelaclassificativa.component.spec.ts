import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaclassificativaComponent } from './tabelaclassificativa.component';

describe('TabelaclassificativaComponent', () => {
  let component: TabelaclassificativaComponent;
  let fixture: ComponentFixture<TabelaclassificativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaclassificativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaclassificativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
