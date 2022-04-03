import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTo(path) {
    this.router.navigate([path])
    
  }

  Logout() {
    localStorage.removeItem('USER')
    localStorage.removeItem('PASSWORD')
    localStorage.removeItem('VALORRETORNO')
  }

}
