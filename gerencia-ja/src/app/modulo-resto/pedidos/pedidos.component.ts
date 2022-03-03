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
    this.pedidos = JSON.parse(localStorage.getItem('PEDIDOS')) || [];
  }

  pedidos = [];
  objeto = {};

  ngOnInit() {
    this.usuarioService.buscarProduto()
    .then((resultado: Produto[])=> {
      for(let i = 0; i < resultado.length; i++){
        this.objeto = {
          nome: resultado[i].NOME,
        }
        console.log(this.pedidos)
        this.pedidos.push(this.objeto)
      }
    }).catch(erro => {
      console.log("ERRO AO BUSCAR PRODUTO:", erro)
    })

    this.usuarioService.buscarCliente()
    .then((resultado: Cliente[])=> {
      for(let i = 0; i < resultado.length; i++){
        this.objeto = {
          nome: resultado[i].NOME
        }
        console.log(this.pedidos)
        this.pedidos.push(this.objeto)
      }
    }).catch(erro => {
      console.log("ERRO AO BUSCAR CLIENTE:", erro)
    })
  }

  removerProduto(index) {
    this.pedidos.splice(index, 1);
    localStorage.setItem('PEDIDOS', JSON.stringify(this.pedidos))
  }

  getValue() {
    return 0;
  }

}

interface Produto {
NOME: "string";
}

interface Cliente {
  NOME: "string";
  SOBRENOME: "String"
  }