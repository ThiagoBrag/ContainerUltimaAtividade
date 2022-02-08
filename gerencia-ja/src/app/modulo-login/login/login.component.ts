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

    fetch('/api/buscar_usuario',
      {
        method: 'POST',
        body: JSON.stringify({ nome: this.username, password: this.password }),
        headers: { 'Content-Type': 'application/json' }
      }).then(function (result) {
        return result.json();
      }).then(function (dados) {
        console.log(dados);
      }).catch(function (erro) {
        console.log(erro);
      })

    localStorage.setItem('USER', this.username);
    localStorage.setItem('PASSWORD', this.password);
    this.router.navigate(['/loja']);
  }
}