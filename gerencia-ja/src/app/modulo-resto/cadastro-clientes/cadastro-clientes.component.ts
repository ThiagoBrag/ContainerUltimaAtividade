import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  id = undefined;
  clientes = [];
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.clientes = JSON.parse(localStorage.getItem('CLIENTES'))  || [];

    if (id != 'novo') {
      this.id = parseInt(id) - 1;

      if (this.clientes[this.id]) {
        this.name = this.clientes[this.id].name;
        this.surname = this.clientes[this.id].surname;
      }
    }
  }

  name: '';
  surname: '';

  ngOnInit() {
  }

  cadastrar() {
    if (this.name && this.surname) {
    this.usuarioService.inserirCliente(this.name, this.surname)
    this.router.navigate(['/clientes']);
  } else {
    alert('É necessário preencher todos os campos!');
    }
    
  }

  //   if (this.name && this.surname) {
  //     const cliente = { name: this.name, surname: this.surname }

  //     if (this.id == 'novo') {

  //       this.clientes.push(cliente);
  //     } else {
  //       this.clientes[this.id] = cliente;
  //     }

  //     localStorage.setItem('CLIENTES', JSON.stringify(this.clientes));
  //     this.router.navigate(['/clientes']);
  //   } else {
  //     alert('É necessário preencher todos os campos!');
  //   }
  // }

}
