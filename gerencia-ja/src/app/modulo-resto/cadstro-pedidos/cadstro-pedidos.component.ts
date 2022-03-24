import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
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
      this.index = this.router.url.substring(this.router.url.length - 1);
      this.usuarioService.buscarPedido()
        .then((resultado: any) => {
          resultado.find(valorPedido => {
            if (valorPedido.ID == this.index) {
              this.clienteId = valorPedido.CLIENTE_ID;
              this.listaProdutosId = valorPedido.PRODUTO_ID;
              this.enderecoId = valorPedido.ENDERECO_ID;
              this.usuarioService.buscarEndereco().then((resultado: any) => {
                resultado.find(valorEndereco => {

                  if (valorEndereco.ID == this.enderecoId) {

                    this.pais = valorEndereco.PAIS;
                    this.estado = valorEndereco.ESTADO;
                    this.cidade = valorEndereco.CIDADE;
                    this.bairro = valorEndereco.BAIRRO;
                    this.rua = valorEndereco.RUA;
                    this.numero = valorEndereco.NUMERO;
                    localStorage.setItem('NUMEROANTIGO', this.numero);
                    this.cep = valorEndereco.CEP;
                  }
                })
              })
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
    if (this.clienteId && this.listaProdutosId && this.pais && this.estado && this.cidade && this.bairro && this.rua && this.numero && this.cep) {

      this.usuarioService.inserirEndereco(this.pais, this.estado, this.cidade, this.bairro, this.rua, this.numero, this.cep)
      this.usuarioService.buscarEndereco().then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          if (this.numero == resultado[i].NUMERO && this.cep == resultado[i].CEP) {
            this.enderecoId = resultado[i].ID;
            this.usuarioService.inserirPedido(this.clienteId, this.listaProdutosId, this.enderecoId)
            this.router.navigate(['/pedidos']);
            break;
          }
        }
      });


    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

  editar() {
    if (this.pais && this.estado && this.cidade && this.bairro && this.rua && this.numero && this.cep) {
      
      this.usuarioService.buscarEndereco().then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          let NumeroAntigo = localStorage.getItem('NUMEROANTIGO')
          if (NumeroAntigo == resultado[i].NUMERO && this.cep == resultado[i].CEP) {
            this.enderecoId = resultado[i].ID;
            this.usuarioService.editarEndereco(this.pais, this.estado, this.cidade, this.bairro, this.rua, this.numero, this.cep, this.enderecoId)
            this.usuarioService.buscarEndereco().then((resultado: any) => {
              for (let i = 0; i < resultado.length; i++) {
                if (this.numero == resultado[i].NUMERO && this.cep == resultado[i].CEP) {
                  this.enderecoId = resultado[i].ID;
                  this.usuarioService.editarPedido(this.clienteId, this.listaProdutosId, this.enderecoId, this.index).then((resultado: any) => {
                    this.router.navigate(['/pedidos']);
                  })
                  break;
                }
              }
            });
          }
        }
      });

    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

}

