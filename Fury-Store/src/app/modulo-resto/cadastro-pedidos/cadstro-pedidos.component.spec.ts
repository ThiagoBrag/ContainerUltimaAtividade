import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadstroPedidosComponent } from './cadstro-pedidos.component';

describe('CadstroPedidosComponent', () => {
  let component: CadstroPedidosComponent;
  let fixture: ComponentFixture<CadstroPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadstroPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadstroPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
