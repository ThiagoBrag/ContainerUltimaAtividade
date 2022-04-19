import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { cr } from '@angular/core/src/render3';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  @ViewChild('mudarCor', { read: ElementRef })
  private modalElement: ElementRef

  id = undefined;
  produtos = [];
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
  }

  produtoSele;
  ProdutoSelecionado = 0;
  UserNome;
  finalizarCompraID;
  valortotal;
  ValorFinal = 0;
  qtdProduto;
  userId;
  idProduto;
  listaQuantidade = [];
  selecionado;
  quantidade = 1;
  idCarrinho;
  carrinho = [];
  objeto = {};
  ngOnInit() {
    this.userId = localStorage.getItem("ID");

    this.usuarioService.buscarUsuarios().then((resultado: any) => {
      resultado.find(ValorUser => {
        if (ValorUser.ID == this.userId) {
          this.UserNome = ValorUser.NOME
        }
      })
    })

    this.usuarioService.buscarCarrinho()
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          if (this.userId == resultado[i].USER_ID) {
            this.objeto = {
              id: resultado[i].ID,
              idProduto: resultado[i].PRODUTO_ID,
              nome: resultado[i].PRODUTO_NOME,
              valor: resultado[i].PRODUTO_VALOR,
              imagem: resultado[i].PRODUTO_IMAGEM
            }

            this.carrinho.push(this.objeto)
          }
          this.listaQuantidade[i] = 1
        }
      }).catch(erro => {
        console.log("ERRO AO BUSCAR PRODUTO:", erro)
      })
  }

  removerCarrinho(i) {
    this.idCarrinho = this.carrinho[i].id
    this.usuarioService.excluirCarrinho(this.idCarrinho)
    alert("Produto removido com sucesso!")
    document.location.reload();
  }

  checkCheckBoxvalue(event, car, i) {
    if (event.target.checked == true) {
      this.ProdutoSelecionado++
      this.valortotal = car.valor * this.listaQuantidade[i];
      this.usuarioService.inserirFinalizarCompra(this.userId, car.idProduto, this.listaQuantidade[i], this.valortotal)
    } else if (event.target.checked == false) {
      this.ProdutoSelecionado--
      this.usuarioService.buscarFinalizarCompra().then((resultdo: any) => {
        resultdo.find(ValorFinalizarCompra => {

          if (this.userId == ValorFinalizarCompra.USER_ID) {
            if (car.idProduto == ValorFinalizarCompra.PRODUTO_ID) {
              if (this.listaQuantidade[i] == ValorFinalizarCompra.PRODUTO_QUANTIDADE) {
                this.usuarioService.ExcluirFinalizarCompra(ValorFinalizarCompra.ID)
              }
            }
          }
        })
      })
    }
    localStorage.setItem("PRODUTOSELECIONADO", this.ProdutoSelecionado.toString())
  }

  comprar() {
    this.ValorFinal = 0;
    console.log(localStorage.getItem("PRODUTOSELECIONADO"))
    if (parseInt(localStorage.getItem("PRODUTOSELECIONADO")) > 0) {
      this.usuarioService.buscarFinalizarCompra().then((resultado: any) => {
        resultado.find(ValorFinalizarCompra => {
          if (this.userId == ValorFinalizarCompra.USER_ID) {
            this.ValorFinal += ValorFinalizarCompra.PRODUTO_VALORTOTAL;
            this.finalizarCompraID = ValorFinalizarCompra.ID;
          }
        })
        this.usuarioService.ExcluirFinalizarCompra(this.finalizarCompraID)
        this.usuarioService.inserirPedido2(this.userId, this.UserNome, this.ValorFinal)
        alert("Produto comprado com sucesso!")
        this.router.navigate(['/menu']);
      })
    } else {
      alert("Não existe produto selecionado")
    }
    localStorage.removeItem("PRODUTOSELECIONADO")
  }
}
