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

  ValorDoEndereco = "";
  ValorDoCliente = "";
  produtos = [];
  clientes = [];
  pedidos = [];

  ngOnInit() {
    this.usuarioService.buscarPedido()
      .then((resultado: any) => {
        resultado.find(valorResultado => {
          this.usuarioService.buscarEndereco().then((resultadoEndereco: any) => {
            resultadoEndereco.find(valorEndereco => {
              if (valorEndereco.ID - 1 == valorResultado.ENDERECO_ID) {
                this.ValorDoEndereco = valorResultado.ENDERECO_ID
              }
            })
          })
          this.usuarioService.buscarCliente()
            .then((resultadoCLiente: any) => {
              resultadoCLiente.find(valorCliente => {
                if (valorCliente.ID - 1 == valorResultado.CLIENTE_ID) {
                  this.ValorDoCliente = valorResultado.CLIENTE_ID;
                  this.usuarioService.buscarProduto()
                    .then((resultadoProduto: any) => {
                      resultadoProduto.find(valorProduto => {
                        if (valorProduto.ID - 1 == valorResultado.PRODUTO_ID) {

                          let pedido = {
                            nomeCliente: valorCliente.NOME,
                            nomeProduto: valorProduto.NOME
                          }

                          this.pedidos.push(pedido)
                        }
                      })
                    })
                }
              })
            })
        })
      })
  }

  removerProduto(index) {
    this.usuarioService.buscarPedido()
      .then((resultado: any) => {
        resultado.find(valorPedido => {
          if (valorPedido.CLIENTE_ID == this.ValorDoCliente) {
            if (valorPedido.ENDERECO_ID == this.ValorDoEndereco) {
              this.usuarioService.excluirPedido(valorPedido.ID)
              document.location.reload();
              alert("Pedido excluído com sucesso!")
            }
          }
        })
      })
  }

}