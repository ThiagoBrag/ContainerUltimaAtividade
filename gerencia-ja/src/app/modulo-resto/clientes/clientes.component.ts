import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    public router: Router,
    private usuarioService: UsuarioService
  ) {
    this.clientes = JSON.parse(localStorage.getItem('CLIENTES')) || [];
  }

  clientes = [];
  objeto = {}

  ngOnInit() {
    this.usuarioService.buscarCliente()
    .then((resultado: Cliente[])=> {
      for(let i = 0; i < resultado.length; i++){
        this.objeto = {
          nome: resultado[i].NOME,
          sobrenome: resultado[i].SOBRENOME
        }
        this.clientes.push(this.objeto)
      }
    }).catch(erro => {
      console.log("ERRO AO BUSCAR CLIENTE:", erro)
    })
  }

  removerCliente(index) {
    this.clientes.splice(index, 1);
    localStorage.setItem('CLIENTES', JSON.stringify(this.clientes))
  }


}

interface Cliente{
  NOME: string;
  SOBRENOME: string;
}