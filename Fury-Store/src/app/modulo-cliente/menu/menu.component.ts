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

  produtos = [];
  objeto = {}
  ngOnInit() {
    this.usuarioService.buscarProduto()
      .then((resultado: Produto[]) => {
        for (let i = 0; i < resultado.length; i++) {
          this.objeto = {
            nome: resultado[i].NOME,
            valor: resultado[i].VALOR,
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

}

interface Produto {
  NOME: string;
  VALOR: string;
  ID: number;
}