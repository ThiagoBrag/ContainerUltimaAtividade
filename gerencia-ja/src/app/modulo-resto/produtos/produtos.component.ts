import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    public router: Router,
    private usuarioService: UsuarioService
  ) {
    this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];
  }
  
  produtos = [];
  objeto  ={}
  ngOnInit() {
    this.usuarioService.buscarProduto()
    .then((resultado: Produto[])=> {
      for(let i = 0; i < resultado.length; i++){
        this.objeto = {
          nome: resultado[i].NOME,
          valor: resultado[i].VALOR
        }
        this.produtos.push(this.objeto)
      }
    }).catch(erro => {
      console.log("ERRO AO BUSCAR PRODUTO:", erro)
    })
  }
  
  removerProduto(index) {
    this.usuarioService.buscarProduto()
    .then((resultado: any) => {
      resultado.find(valorProduto => {
        if (valorProduto.NOME == this.produtos[index].nome) {
          this.usuarioService.excluirProduto(valorProduto.ID)
          document.location.reload();
          alert("Produto excluído com sucesso!")
        }
      })
    })
    
  }

}
interface Produto{
  NOME: string;
  VALOR: string;
}