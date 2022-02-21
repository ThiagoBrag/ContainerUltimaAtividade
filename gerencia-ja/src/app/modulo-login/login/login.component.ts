import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.usuarioService.buscarUsuarios()
    .then(resultado => {
      console.log('RESULTADO:', resultado);
    }).catch(erro => {
      console.log('ERRO AO BUSCAR USUARIOS:', erro);
    })
  }
  
  logar() {
    let retorno = 0;
    localStorage.setItem('USER', this.username);
    localStorage.setItem('PASSWORD', this.password);

    this.usuarioService.buscarUsuarios()
    .then((resultado: User[]) =>{
      for(let i=0; i < resultado.length; i++) {
        if (this.username == resultado[i].NOME && this.password == resultado[i].PASSWORD){
          this.router.navigate(['/loja']);
        } else {
          retorno = 1;
        }
      }
    })
    if (retorno == 1) {
      alert('Usuário Incorreto');
    }
    
  }
}

interface User {
  NOME: string;
  PASSWORD: string;
}