import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
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

  qtdProduto
  valorTotal
  nome
  userId
  idProduto
  listaQuantidade = []
  selecionado
  quantidade = 1
  idCarrinho
  carrinho = [];
  objeto = {}
  ngOnInit() {
    this.userId = localStorage.getItem("ID");
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
  
  
  
  selecionarProduto(car, i) {
    
    localStorage.setItem("ID_PRODUTO", car.idProduto)
    localStorage.setItem("QUANTIDADE_PRODUTO", this.listaQuantidade[i])
    this.usuarioService.inserirFinalizarCompra(this.userId, car.idProduto, this.listaQuantidade[i])

    // var check = document.querySelector("#myCheck:checked");
     
    // var carrinhoo;
    //   if(check) {
    //     carrinhoo = 'sim'
    //   }else{
    //     carrinhoo = 'nao'
    //   }
    //   console.log("TA AQUI", carrinhoo, "INDEX", i)
    //   if (carrinhoo == 'sim') {
    //     const htmlElement: HTMLElement = this.modalElement.nativeElement;
    //     console.log(car)
    //     htmlElement.classList.add('color');
    //   } else {
    //     const htmlElement: HTMLElement = this.modalElement.nativeElement;
    //     htmlElement.classList.remove('color');
    //   }
    
  }

  comprar() {
    this.idProduto = localStorage.getItem('ID_PRODUTO')
    this.qtdProduto = localStorage.getItem('QUANTIDADE_PRODUTO')

    this.usuarioService.buscarFinalizarCompra().then((resultado: any) => {
      resultado.find(ValorFinalizarCompra => {
        if (this.userId == ValorFinalizarCompra.USER_ID) {
          this.usuarioService.buscarUsuarios().then((resultado: any) => {
            resultado.find(ValorUsuario => {
              if (ValorUsuario.ID == this.userId) {
                this.nome = ValorUsuario.NOME
                this.usuarioService.buscarProduto().then((resultado: any) => {
                  resultado.find(ValorProduto => {
                    if (ValorProduto.ID == this.idProduto) {
                      this.valorTotal = ValorProduto.VALOR * this.qtdProduto
                      this.usuarioService.inserirPedido2(ValorFinalizarCompra.USER_ID, this.nome, ValorProduto.ID, ValorProduto.NOME, this.valorTotal)
                      alert("Produto comprado com sucesso!")
                      this.router.navigate(['/menu']);
                    }
                  })
                })
              }
            })
          })
          
        }
      })
    })
  }

}

// CONTINUAR A FAZER O CARRINHO (COLOCAR O MARK TASK E FAZER TOTAL)
