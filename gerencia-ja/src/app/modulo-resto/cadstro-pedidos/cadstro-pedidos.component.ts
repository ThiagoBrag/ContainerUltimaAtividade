import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-cadstro-pedidos',
  templateUrl: './cadstro-pedidos.component.html',
  styleUrls: ['./cadstro-pedidos.component.css']
})
export class CadstroPedidosComponent implements OnInit {
  id = undefined;
  pedidos = [];
  produtos = []
  clientes = [];
  clienteId = undefined;
  produtoId = undefined;
  listaProdutosId = [];
  status: 'ABERTO';
  nomePessoa = ''
  nomeProduto = ''

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.pedidos = JSON.parse(localStorage.getItem('PEDIDOS')) || [];
    this.clientes = JSON.parse(localStorage.getItem('CLIENTES')) || [];
    this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];

    if (id != 'novo') {
      this.id = parseInt(id) - 1;

      if (this.pedidos[this.id]) {
        this.clienteId = this.pedidos[this.id].clienteId;
        this.listaProdutosId = this.pedidos[this.id].listaProdutosId;
      }
    }
  }


  ngOnInit() {
    this.usuarioService.buscarCliente()
    .then((resultado: User[]) => {
      for (let i = 0; i < resultado.length; i++) {
        let info = {
          nome: resultado[i].NOME,
          surname: resultado[i].SOBRENOME
        }
        this.clientes.push(info)
      }
    })

    this.usuarioService.buscarProduto()
    .then((resultado: Produto[]) => {
      for (let i = 0; i < resultado.length; i++) {
        let info = {
          nome: resultado[i].NOME,
        }
        this.produtos.push(info)
      }
    })
  }

  cadastrar() {
    
    this.usuarioService.inserirPedido(this.clienteId, this.listaProdutosId)

    // if (this.clienteId && this.listaProdutosId) {
    //   const pedido = { clienteId: this.clienteId, listaProdutosId: this.listaProdutosId}
      
    //   console.log("id", pedido,"pedido", this.id)

    //   if (this.id == 'novo') {
    //     this.pedidos.push(pedido);
    //   } else {
    //     this.pedidos[this.id] = pedido;
    //   }
    //   localStorage.setItem('PEDIDOS', JSON.stringify(this.pedidos));

    //   console.log("peidsods",this.pedidos)
      this.router.navigate(['/pedidos']);
    // } else {
    //   alert('É necessário preencher todos os campos!');
    // }
  }

}

interface User {
  NOME: string;
  SOBRENOME: string
}

interface Produto {
  NOME: string;
}