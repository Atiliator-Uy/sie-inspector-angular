import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojarutaAleatoriaComponent } from './hojaruta-aleatoria.component';

describe('HojarutaAleatoriaComponent', () => {
  let component: HojarutaAleatoriaComponent;
  let fixture: ComponentFixture<HojarutaAleatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojarutaAleatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojarutaAleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
