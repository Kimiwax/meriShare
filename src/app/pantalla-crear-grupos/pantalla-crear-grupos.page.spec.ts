import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PantallaCrearGruposPage } from './pantalla-crear-grupos.page';

describe('PantallaCrearGruposPage', () => {
  let component: PantallaCrearGruposPage;
  let fixture: ComponentFixture<PantallaCrearGruposPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PantallaCrearGruposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
