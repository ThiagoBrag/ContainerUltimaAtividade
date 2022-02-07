import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    private router: Router,
    private route:  ActivatedRoute,
    ) { }

    
  ngOnInit() {

  }

  logar(){

    fetch('/api/buscar_usuario', 
{method: 'POST', 
body: JSON.stringify({nome: this.username, password: this.password}), 
headers: {'Content-Type': 'application/json'}}).then(function (result) {
    return result.json();
}).then(function(dados) {
    console.log(dados);
}).catch(function(erro) {
    console.log(erro);
})
    
    localStorage.setItem('USER', this.username);
    localStorage.setItem('PASSWORD', this.password);
    this.router.navigate(['/loja']);
  }
}