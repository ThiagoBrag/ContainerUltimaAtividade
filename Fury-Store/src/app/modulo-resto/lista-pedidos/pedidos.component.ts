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

  ValorDoCliente = "";
  produtos = [];
  clientes = [];
  pedidos = [];


  ngOnInit() {
    this.usuarioService.buscarPedido()
    .then((resultado: any)=> {
      resultado.find(ValorPedido => {
        let nomeCliente
        let nomeProduto
        this.usuarioService.buscarCliente().then((resultado: any) => {
          resultado.find(ValorCliente => {
            if (ValorCliente.ID == ValorPedido.CLIENTE_ID) {
              nomeCliente= ValorCliente.NOME
              this.usuarioService.buscarProduto().then((resultado: any) => {
                resultado.forEach(ValorProduto => {
                  if (ValorProduto.ID == ValorPedido.PRODUTO_ID) {
                    nomeProduto=  ValorProduto.NOME
                    let pedido = {
                      idPedido: ValorPedido.ID,
                      idProduto: ValorPedido.PRODUTO_ID,
                      idCliente: ValorPedido.CLIENTE_ID,
                      nomeDoProduto: nomeProduto,
                      nomeDoCliente: nomeCliente
                    }
                    this.pedidos.push(pedido),
                    console.log("LENFII", this.pedidos)
                  }
                })
              })
            }
          })
        })
      })
    }).catch(erro => {
      console.log("ERRO AO BUSCAR CLIENTE:", erro)
    })
  }

    // this.usuarioService.buscarPedido()
    //   .then((resultado: any) => {
    //     console.log(resultado)
    //     resultado.find(valorResultado => {
    //       this.usuarioService.buscarCliente()
    //         .then((resultadoCLiente: any) => {
    //           resultadoCLiente.find(valorCliente => {
    //             if (valorCliente.ID - 1 == valorResultado.CLIENTE_ID) {
    //               this.ValorDoCliente = valorResultado.CLIENTE_ID;
    //               this.usuarioService.buscarProduto()
    //                 .then((resultadoProduto: any) => {
    //                   resultadoProduto.find(valorProduto => {
    //                     if (valorProduto.ID - 1 == valorResultado.PRODUTO_ID) {

    //                       let pedido = {
    //                         nomeCliente: valorCliente.NOME,
    //                         idCliente: valorCliente.ID,
    //                         nomeProduto: valorProduto.NOME,
    //                         idProduto: valorProduto.ID
    //                       }

    //                       this.pedidos.push(pedido)
    //                     }
    //                   })
    //                 })
    //             }
    //           })
    //         })
    //     })
    //   })


  // TESTAR O REMOVER PEDIDO, E EDITAR DEPOIS

  editarPedido(produto,cliente){
    let idCliente
    let idProduto
    
    this.usuarioService.buscarCliente().then((resultado: any) =>{
      resultado.forEach(valorCliente =>{
        if (valorCliente.NOME == cliente) {
            idCliente = valorCliente.ID;
        }
      })
    })
    this.usuarioService.buscarProduto().then((resultado: any) =>{
      resultado.forEach(ValorProduto => {
        if (ValorProduto.NOME == produto) {
          idProduto = ValorProduto.ID;
        }
      })
    })
    this.usuarioService.buscarPedido()
    .then((resultado: any) => {
      resultado.forEach(valorPedido => {
        if(valorPedido.CLIENTE_ID == idCliente && valorPedido.PRODUTO_ID == idProduto) {
          this.router.navigate(["pedidos", valorPedido.ID])
        }
      })
    })
  }

  removerProduto(i) {
    this.usuarioService.buscarPedido()
      .then((resultado: any) => {
        resultado.find(valorPedido => {
          if (valorPedido.CLIENTE_ID == this.pedidos[i].idProduto) {
            let valorPedidoId = valorPedido.ID;
            this.usuarioService.excluirPedido(valorPedidoId)
            this.usuarioService.buscarEndereco().then((resultado: any) => {
              resultado.find(valorEndereco => {
                if (valorEndereco.ID == valorPedido.ENDERECO_ID) {
                  this.usuarioService.excluirEndereco(valorEndereco.ID);
                  document.location.reload();
                  alert("Pedido excluído com sucesso!")
                }
              })
            })

          }
        })
      })

    // this.usuarioService.buscarPedido()
    //   .then((resultado: any) => {
    //     resultado.find(valorResultado => {

    //       this.usuarioService.buscarCliente().then((resultado: any) => {
    //         resultado.find(valorCliente => {
    //             if (valorCliente.ID - 1 == valorResultado.CLIENTE_ID) {

    //               console.log("AAAAAAATTTTTTTTT")

    //               this.usuarioService.excluirPedido(valorResultado.ID)
    //               document.location.reload();
    //               alert("Pedido excluído com sucesso!")

    //             }

    //         })
    //       })
    //     })
    //   })
  }

}