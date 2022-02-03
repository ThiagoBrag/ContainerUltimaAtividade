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
    
    localStorage.setItem('USER', this.username);
    localStorage.setItem('PASSWORD', this.password);
    this.router.navigate(['/loja']);
    this.username = '';
    this.password = '';
  }
}