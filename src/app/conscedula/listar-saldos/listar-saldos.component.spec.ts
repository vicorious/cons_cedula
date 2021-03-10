import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSaldosComponent } from './listar-saldos.component';

describe('ListarSaldosComponent', () => {
  let component: ListarSaldosComponent;
  let fixture: ComponentFixture<ListarSaldosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSaldosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
