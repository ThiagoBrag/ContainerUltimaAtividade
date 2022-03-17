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
  user = '';
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
          localStorage.setItem('USER', "ty");
          localStorage.setItem('PASSWORD', "ty");
          this.router.navigate(['/loja']);
        }
      );
    }

  logar() {

    if (this.user && this.password) {
    this.usuarioService.checarUser(this.user, this.password)
    .then((resultado: any) => {
      if (resultado != "") {
        localStorage.setItem("NOME", resultado[0].NOME)
        localStorage.setItem("PASSWORD", resultado[0].PASSWORD)
        this.router.navigate(['/loja']);
      } else {
        alert('Usuário ou senha incorreta!');
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