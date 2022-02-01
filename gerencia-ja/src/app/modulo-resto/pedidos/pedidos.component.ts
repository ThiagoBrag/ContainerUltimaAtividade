import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(
    public router: Router
  ) {
    this.pedidos = JSON.parse(localStorage.getItem('PEDIDOS')) || [];
  }

  pedidos = [];

  ngOnInit() {
  }

  removerProduto(index) {
    this.pedidos.splice(index, 1);
    localStorage.setItem('PEDIDOS', JSON.stringify(this.pedidos))
  }

  getValue() {
    return 0;
  }

}
