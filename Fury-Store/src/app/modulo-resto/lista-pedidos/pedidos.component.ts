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
        let pedido = {
          NomeCliente: ValorPedido.CLIENTE_NOME,
          ValorTotal: ValorPedido.PRODUTO_VALOR
        }
        this.pedidos.push(pedido)
        // this.usuarioService.buscarUsuarios().then((resultadoo: any) => {
        //   resultadoo.find(ValorUsuario => {
        //     if (ValorPedido.CLIENTE_ID == ValorUsuario.ID) {
              
        //     }
        //   })
        // })

      //   let nomeCliente
      //   let nomeProduto
      //   this.usuarioService.buscarCliente().then((resultado: any) => {
      //     resultado.find(ValorCliente => {
      //       if (ValorCliente.ID == ValorPedido.CLIENTE_ID) {
      //         nomeCliente= ValorCliente.NOME
      //         this.usuarioService.buscarProduto().then((resultado: any) => {
      //           resultado.forEach(ValorProduto => {
      //             if (ValorProduto.ID == ValorPedido.PRODUTO_ID) {
      //               nomeProduto=  ValorProduto.NOME
      //               let pedido = {
      //                 idPedido: ValorPedido.ID,
      //                 idProduto: ValorPedido.PRODUTO_ID,
      //                 idCliente: ValorPedido.CLIENTE_ID,
      //                 nomeDoProduto: nomeProduto,
      //                 nomeDoCliente: nomeCliente
      //               }
      //               this.pedidos.push(pedido)
      //             }
      //           })
      //         })
      //       }
      //     })
      //   })
      })
    }).catch(erro => {
      console.log("ERRO AO BUSCAR CLIENTE:", erro)
    })
  }

  removerPedido(cliente,valor){
    this.usuarioService.buscarPedido().then((resultado: any) => {
      resultado.find(ValorPedido => {
        if (ValorPedido.CLIENTE_NOME == cliente) {
          console.log("AAA", cliente)
          if (ValorPedido.PRODUTO_VALOR == valor) {
            this.usuarioService.excluirPedido(ValorPedido.ID)
            alert("Pedido enviado com sucesso!")
            document.location.reload();
          }
        }
        console.log(ValorPedido)
      })
    })
  }
}