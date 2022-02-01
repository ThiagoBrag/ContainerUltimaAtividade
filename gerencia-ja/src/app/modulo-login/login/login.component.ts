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
    console.log(this.username, this.password);
    const users = [
      { login: 'bruno', password: '123' },
      { login: 'henrique', password: '123' },
      { login: 'verbinnen', password: '123' },
      { login: 'a', password: 'a' },
    ];

    const find = users.find(e => e.login == this.username && e.password == this.password);

    if (find) {
      localStorage.setItem('USER', this.username);
      this.router.navigate(['/loja']);
    } else {
      alert('Usuário não cadastrado!');
    }
  }
}
