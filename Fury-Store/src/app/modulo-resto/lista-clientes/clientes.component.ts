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
    .then((resultado: any)=> {
      
      
      for(let i = 0; i < resultado.length; i++){
        if (resultado[i].NOME != "thiago" && resultado[i].SOBRENOME != "braga") {
          this.objeto = {
            nome: resultado[i].NOME,
            sobrenome: resultado[i].SOBRENOME,
            id: resultado[i].ID
          }
        this.clientes.push(this.objeto)
        }
      }
    }).catch(erro => {
      console.log("ERRO AO BUSCAR CLIENTE:", erro)
    })
  }

  banCliente(nome,sobrenome){
    this.usuarioService.buscarCliente().then((resultado: any) => {
      resultado.find(ValorCliente => {
        if (ValorCliente.NOME == nome && ValorCliente.SOBRENOME == sobrenome) {
          this.usuarioService.excluirCliente(ValorCliente.ID)
          this.usuarioService.buscarUsuarios().then((resultado: any) => {
            resultado.find(ValorUsuario => {
              if (ValorUsuario.NOME == nome && ValorUsuario.SOBRENOME == sobrenome) {
                this.usuarioService.excluirUsuario(ValorUsuario.ID)
                alert("CLIENTE BANIDO!")
                document.location.reload();
              }
            })
          })
          
        }
      })
    })
    
  }


}