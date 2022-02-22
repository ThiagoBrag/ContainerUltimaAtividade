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

            this.usuarios.buscarUsuarios().then((resultado: (Object: "String") => []) => {
                for (let i = 0; i < resultado.length; i++) {
                    if (resultado[i].NOME == username && resultado[i].PASSWORD == password) {
                        retorno = 1
                        localStorage.setItem('VALORRETORNO',retorno)
                    }
                }
            })
            if (localStorage.getItem('VALORRETORNO') == '1') {
                console.log("aaa", localStorage.getItem('VALORRETORNO'))
                return true;
            } else {
                return false;
            }
    }
}

export default CheckLogged;