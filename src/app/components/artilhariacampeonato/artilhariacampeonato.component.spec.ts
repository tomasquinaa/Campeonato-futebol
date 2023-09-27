import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilhariacampeonatoComponent } from './artilhariacampeonato.component';

describe('ArtilhariacampeonatoComponent', () => {
  let component: ArtilhariacampeonatoComponent;
  let fixture: ComponentFixture<ArtilhariacampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtilhariacampeonatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtilhariacampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
