import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  id = undefined;
  produtos = [];
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
  }

  carrinho = [];
  objeto = {}
  ngOnInit() {
    this.usuarioService.buscarCarrinho()
      .then((resultado: any) => {
        console.log(resultado)
        for (let i = 0; i < resultado.length; i++) {
          this.objeto = {
            id: resultado[i].ID,
            idProduto: resultado[i].ID_PRODUTO,
            nome: resultado[i].NOME_PRODUTO,
            valor: resultado[i].VALOR_PRODUTO,
          }
          this.carrinho.push(this.objeto)
        }
      }).catch(erro => {
        console.log("ERRO AO BUSCAR PRODUTO:", erro)
      })
  }

}
