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

  removerProduto(i) {
    // NAO CADASTRA ID NO CLIENTE E NAO BUSCA OUTROS IP DE ENDEREÇOS, SÓ O PRIMEIRO
    dfg 
    this.usuarioService.buscarPedido()
      .then((resultado: any) => {
        resultado.find(valorResultado => {
          if (valorResultado.CLIENTE_ID + 1 == this.ValorDoCliente) {
            if (valorResultado.ENDERECO_ID == this.ValorDoEndereco) {
              
              this.usuarioService.excluirPedido(valorResultado.ID)
              document.location.reload();
              alert("Pedido excluído com sucesso!")
            }
          }
        })
      })
  }

}