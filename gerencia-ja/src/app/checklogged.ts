import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UsuarioService } from "./services/usuario.service"

@Injectable()
class CheckLogged implements CanActivate {
    constructor(
        private router: Router,
        private usuarios: UsuarioService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        let username = localStorage.getItem('USER')
        let password = localStorage.getItem('PASSWORD')
        let retorno;

        if (username && password) {
            this.usuarios.buscarUsuarios().then((resultado: (Object: "String") => []) => {
                for (let i = 0; i < resultado.length; i++) {
                    if (resultado[i].NOME == username && resultado[i].PASSWORD == password) {
                        retorno = 1;
                    }
                }


            })
            return true;
        } else {
            
            return false
        }


        // console.log("Aqui jas retorno",retorno)
        // if (retorno == 0) {
        //     return true;
        // } else {
        // alert('Usuário não cadastrado')
        // this.router.navigate([''])
        // return false;
        // }
    }
}

export default CheckLogged;