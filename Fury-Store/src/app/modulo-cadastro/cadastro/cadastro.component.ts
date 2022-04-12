import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  sobrenome = '';
  user = '';
  password = '';
  passwordrepetido = '';

  constructor(
    private socialAuthService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public Google(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
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

  cadastrar() {
    if (this.user && this.sobrenome && this.password && this.passwordrepetido) {
      if (this.password == this.passwordrepetido) {
        this.usuarioService.inserirUsuario(this.user,this.sobrenome ,this.password)
            alert('Usuário cadastrado!');
            this.router.navigate(['/login']);
      } else {
        alert('Senhas inseridas diferentes!')
        this.password = '';
        this.passwordrepetido = '';
      }
    } else {
      alert('Preencha todos os campos!');
    }
  }

  logarse() {
    this.router.navigate(['/login'])
  }
}
