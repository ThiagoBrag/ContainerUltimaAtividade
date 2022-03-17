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
  enderecoId;
  cep = '';
  pais = '';
  estado = '';
  cidade = '';
  bairro = '';
  rua = '';
  numero = '';
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
    if (this.id != 'novo') {
      this.usuarioService.buscarPedidokgui
    }

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
    if (this.clienteId && this.listaProdutosId && this.pais && this.estado && this.cidade && this.bairro && this.rua && this.numero && this.cep) {
      
      this.usuarioService.inserirEndereco(this.pais, this.estado, this.cidade, this.bairro, this.rua, this.numero, this.cep)
      this.usuarioService.buscarEndereco().then((resultado: Endereco[]) => {
        for (let i = 0; i < resultado.length; i++) {
          if (this.numero == resultado[i].NUMERO && this.cep == resultado[i].CEP) {
              this.enderecoId = resultado[i].ID;
          }
        }
      });
      
      this.usuarioService.inserirPedido(this.clienteId, this.listaProdutosId, this.enderecoId)
      this.router.navigate(['/pedidos']);
    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

}

interface Endereco {
NUMERO: string;
CEP: string;
ID: string;
}

interface User {
  NOME: string;
  SOBRENOME: string
}

interface Produto {
  NOME: string;
}