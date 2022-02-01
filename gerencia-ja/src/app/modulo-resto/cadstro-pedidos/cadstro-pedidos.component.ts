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

    if (id != 'novo') {
      this.id = parseInt(id) - 1;

      if (this.pedidos[this.id]) {
        this.clienteId = this.pedidos[this.id].clienteId;
        this.listaProdutosId = this.pedidos[this.id].listaProdutosId;
        this.status = this.pedidos[this.id].status;
      }
    }
  }


  ngOnInit() {
  }

  cadastrar() {
    if (this.clienteId && this.listaProdutosId) {
      const pedido = { clienteId: this.clienteId, listaProdutosId: this.listaProdutosId, status: this.status }

      if (this.id == 'novo') {
        this.pedidos.push(pedido);
      } else {
        this.pedidos[this.id] = pedido;
      }

      localStorage.setItem('PEDIDOS', JSON.stringify(this.pedidos));
      this.router.navigate(['/pedidos']);
    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

}
