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

  ngOnInit() {
    this.usuarioService.buscarUsuarios().then((resultado: any) => {
      resultado.find(ResultadoUsuarios => {
        AAAAAAAAAAAAAAAAAA
      })
    })
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
