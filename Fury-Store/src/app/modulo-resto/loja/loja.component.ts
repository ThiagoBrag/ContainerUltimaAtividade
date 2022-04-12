import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  idCliente
  ngOnInit() {
    this.idCliente = localStorage.getItem('ID')
    this.usuarioService.buscarUsuarios().then((resultado: any) => {
      resultado.find(ResultadoUsuarios => {
          if (ResultadoUsuarios.ID != 1) {
          this.usuarioService.inserirCliente(ResultadoUsuarios.NOME, ResultadoUsuarios.SOBRENOME);
          }
      })
    })
  }

  goTo(path) {
    this.router.navigate([path])
    
  }

  Logout() {
    localStorage.removeItem('USER')
    localStorage.removeItem('PASSWORD')
    localStorage.removeItem('ID')
    localStorage.removeItem('VALORRETORNO')
  }

}
