import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  username = '';
  password = '';

  ngOnInit() {
  }

  logar() {
    localStorage.setItem('PASSWORD', this.password)
    localStorage.setItem('USERNAME', this.username)
    this.router.navigate(['/loja']);

  //   const users = [
  //     { login: 'thiago', password: '123' },
  //     { login: 'a', password: 'b' },
  //     { login: 'b', password: 'c' },
  //     { login: 'c', password: 'd' },
  //   ];

  //   const find = users.find(e => e.login == this.username && e.password == this.password);

  //   if (find) {
  //     localStorage.setItem('USER', this.username);
  //     this.router.navigate(['/loja']);
  //   } else {
  //     alert('Usuário não cadastrado!');
  //   }
  // }
}
}
