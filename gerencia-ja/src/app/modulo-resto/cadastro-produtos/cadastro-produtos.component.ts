import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {
  id = undefined;
  produtos = [];
  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];

    if (id != 'novo') {
      this.id = parseInt(id) - 1;

      if (this.produtos[this.id]) {
        this.name = this.produtos[this.id].name;
        this.price = this.produtos[this.id].price;
      }
    }
  }

  name: '';
  price: 0;

  ngOnInit() {
  }

  cadastrar() {
    if (this.name && this.price) {
      const produto = { name: this.name, price: this.price }

      if (this.id == 'novo') {

        this.produtos.push(produto);
      } else {
        this.produtos[this.id] = produto;
      }

      localStorage.setItem('PRODUTOS', JSON.stringify(this.produtos));
      this.router.navigate(['/produtos']);
    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

}
