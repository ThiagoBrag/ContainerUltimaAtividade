import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login-v2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {



  username = '';
  password = '';

  constructor(
    private socialAuthService: AuthService,
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

 public Google(socialPlatform : string) {
      let socialPlatformProvider;
      if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      
      
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          this.router.navigate(['/loja']);
        }
      );
    }
    
  

  logar() {
    localStorage.setItem('USER', this.username);
    localStorage.setItem('PASSWORD', this.password);

    if (this.username && this.password) {
      this.usuarioService.buscarUsuarios()
        .then((resultado: User[]) => {
          for (let i = 0; i < resultado.length; i++) {
            if (this.username == resultado[i].NOME && this.password == resultado[i].PASSWORD) {
              this.router.navigate(['/loja']);
              break;
            } else {
              alert('Usuário ou senha incorreta!');
              break;
            }
          }
        })
    } else {
      alert('Preencha todos os campos!');
    }
  }
}

interface User {
  NOME: string;
  PASSWORD: string;
}