import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    public router: Router
  ) {
    this.clientes = JSON.parse(localStorage.getItem('CLIENTES')) || [];
  }

  clientes = [];

  ngOnInit() {
  }

  removerCliente(index) {
    this.clientes.splice(index, 1);
    localStorage.setItem('CLIENTES', JSON.stringify(this.clientes))
  }


}
