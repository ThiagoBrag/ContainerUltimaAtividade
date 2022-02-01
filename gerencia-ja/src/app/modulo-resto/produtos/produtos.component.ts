import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(
    public router: Router
  ) {
    this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];
  }

  produtos = [];

  ngOnInit() {
  }
  
  removerProduto(index) {
    this.produtos.splice(index, 1);
    localStorage.setItem('PRODUTOS', JSON.stringify(this.produtos))
  }

}
