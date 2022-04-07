import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  idUser
  produtos = [];
  objeto = {}
  ngOnInit() {

    let nomeUser = localStorage.getItem('NOME')
    let senhaUser = localStorage.getItem('PASSWORD')
    this.usuarioService.buscarUsuarios().then((resultado: any) => {
      resultado.find(ValorUsuario => {
        if (ValorUsuario.NOME == nomeUser && ValorUsuario.PASSWORD == senhaUser) {
          this.idUser = ValorUsuario.ID
        }
      })

    })
    this.usuarioService.buscarProduto()
      .then((resultado: Produto[]) => {
        for (let i = 0; i < resultado.length; i++) {
          this.objeto = {
            nome: resultado[i].NOME,
            valor: resultado[i].VALOR,
            imagem: resultado[i].IMAGEM,
            id: resultado[i].ID
          }
          this.produtos.push(this.objeto)
        }
      }).catch(erro => {
        console.log("ERRO AO BUSCAR PRODUTO:", erro)
      })
  }

  logout() {
    localStorage.removeItem('USER')
    localStorage.removeItem('PASSWORD')
    localStorage.removeItem('VALORRETORNO')
    this.router.navigate(['/login'])
  }

  cadastrarCarrinho(index) {
    this.usuarioService.inserirCarrinho(this.idUser, this.produtos[index].id, this.produtos[index].nome, this.produtos[index].valor)
    alert("Produto inserido ao carrinho!")
  }

}

interface Produto {
  NOME: string;
  VALOR: string;
  IMAGEM: string;
  ID: number;
}