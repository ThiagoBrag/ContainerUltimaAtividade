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
  index;
  cep = '';
  pais = '';
  estado = '';
  cidade = '';
  bairro = '';
  rua = '';
  numero = '';
  pedidos = [];
  produtos = [];
  clientes = [];
  clienteId
  ProdutoId
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
      this.id = parseInt(id);

      if (this.pedidos[this.id]) {
        this.clienteId = this.pedidos[this.id].clienteId;
        this.ProdutoId = this.pedidos[this.id].listaProdutosId;
      }
    }
  }


  ngOnInit() {

    if (this.id != 'novo') {
      this.index = this.router.url.substring(this.router.url.length - 1);
      this.usuarioService.buscarPedido()
        .then((resultado: any) => {
          resultado.find(valorBusca => {
            if (valorBusca.ID == this.index) {
              this.clienteId = valorBusca.CLIENTE_ID - 1;
              this.ProdutoId = valorBusca.PRODUTO_ID - 1;
            }
          })
        })

    }

    this.usuarioService.buscarCliente()
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          let info = {
            nome: resultado[i].NOME,
            surname: resultado[i].SOBRENOME
          }
          this.clientes.push(info)
        }
      })

    this.usuarioService.buscarProduto()
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          let info = {
            nome: resultado[i].NOME,
          }
          this.produtos.push(info)
        }
      })
  }

  cadastrar() {
  }

  editar() {

  }

}

