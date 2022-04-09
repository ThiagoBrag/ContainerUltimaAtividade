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

  selecionado
  quantidade = 1
  idCarrinho
  carrinho = [];
  objeto = {}
  ngOnInit() {
    this.usuarioService.buscarCarrinho()
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          this.objeto = {
            id: resultado[i].ID,
            idProduto: resultado[i].PRODUTO_ID,
            nome: resultado[i].PRODUTO_NOME,
            valor: resultado[i].PRODUTO_VALOR,
            imagem: resultado[i].PRODUTO_IMAGEM
          }
          this.carrinho.push(this.objeto)
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
  
  check = document.getElementById('compra');
  selecionarProduto(i) {
    this.idCarrinho = this.carrinho[i].id
    
     
          var  carrinhoo;
            if(this.check.checked){
              carrinhoo = 'sim'
            }else{
              carrinhoo = 'nao'
            }
            localStorage.setItem("CARRINHOO", carrinhoo)
        this.selecionado = localStorage.getItem("CARRINHOO")
        console.log("TA AQUI", this.selecionado)
        if (this.selecionado == 'sim') {
          const htmlElement: HTMLElement = this.modalElement.nativeElement;
          htmlElement.classList.add('color');

        } else {
          const htmlElement: HTMLElement = this.modalElement.nativeElement;
          htmlElement.classList.add('nocolor');
        }
    
  }

  comprar() {
    console.log("COMPRADO")
  }

}

// CONTINUAR A FAZER O CARRINHO (COLOCAR O MARK TASK E FAZER TOTAL)
