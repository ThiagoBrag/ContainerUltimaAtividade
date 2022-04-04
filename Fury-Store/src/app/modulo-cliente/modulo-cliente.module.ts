import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, CarrinhoComponent]
})
export class ModuloClienteModule { }
