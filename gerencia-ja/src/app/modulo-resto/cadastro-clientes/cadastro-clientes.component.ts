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

  index
  name: '';
  surname: '';

  ngOnInit() {
    if (this.id != 'novo') {
      this.index = this.router.url.substring(this.router.url.length - 1);
      this.usuarioService.buscarCliente()
        .then((resultado: any) => {
          resultado.find(valorCliente => {
            if (valorCliente.ID == this.index) {
            this.name = valorCliente.NOME;
            this.surname = valorCliente.SOBRENOME
            console.log("ID CLIENTE ", valorCliente.ID)
            }
          })
        })
      }
  }

  cadastrar() {
    if (this.name && this.surname) {
    this.usuarioService.inserirCliente(this.name, this.surname)
    this.router.navigate(['/clientes']);
  } else {
    alert('É necessário preencher todos os campos!');
    }
  }

  editar() {
    if (this.name && this.surname) {
      this.usuarioService.editarCliente(this.name, this.surname, this.index)
      this.router.navigate(['/clientes']);
    } else {
      alert('É necessário preencher todos os campos!');
      }
  }

}
