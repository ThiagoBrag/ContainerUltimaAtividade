import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(
    public router: Router,
    private usuarioService: UsuarioService
  ) {
    this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];
    this.clientes = JSON.parse(localStorage.getItem('CLIENTES')) || [];
  }

  produtos = [];
  clientes = [];
  objeto = {};

  ngOnInit() {
    this.usuarioService.buscarPedido()
    .then((resultado: any) => {
      this.usuarioService.buscarCliente()
      .then((result: any) => {
        result.find(Cliente => {
          if(resultado.cliente_id == Cliente.ID) {
            this.clientes.push(Cliente.NOME)
          }
        })
      })

    })
  }

  removerProduto(index) {
    this.produtos.splice(index, 1);
  }

  getValue() {
    return 0;
  }

}