import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadstro-pedidos',
  templateUrl: './cadstro-pedidos.component.html',
  styleUrls: ['./cadstro-pedidos.component.css']
})
export class CadstroPedidosComponent implements OnInit {
  id = undefined;
  pedidos = [];
  produtos = []
  clientes = [];
  clienteId = undefined;
  listaProdutosId = [];
  status: 'ABERTO';
  constructor(
    public router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.pedidos = JSON.parse(localStorage.getItem('PEDIDOS')) || [];
    this.clientes = JSON.parse(localStorage.getItem('CLIENTES')) || [];
    this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];

    if (id != 'novo') {
      this.id = parseInt(id) - 1;

      if (this.pedidos[this.id]) {
        this.clienteId = this.pedidos[this.id].clienteId;
        this.listaProdutosId = this.pedidos[this.id].listaProdutosId;
      }
    }
  }


  ngOnInit() {
  }

  cadastrar() {
    if (this.clienteId && this.listaProdutosId) {
      const pedido = { clienteId: this.clienteId, listaProdutosId: this.listaProdutosId}

      if (this.id == 'novo') {
        this.pedidos.push(pedido);
      } else {
        this.pedidos[this.id] = pedido;
      }
      console.log(this.pedidos)
      localStorage.setItem('PEDIDOS', JSON.stringify(this.pedidos));
      this.router.navigate(['/pedidos']);
    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

}
