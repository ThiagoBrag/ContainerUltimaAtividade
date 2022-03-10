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

        if (username == "ty" && password == "ty") {
            return true;
        } else {

            this.usuarios.buscarUsuarios().then((resultado: any) => {
                for (let i = 0; i < resultado.length; i++) {
                    if (resultado[i].NOME == username && resultado[i].PASSWORD == password) {
                        retorno = 1
                        localStorage.setItem('VALORRETORNO', retorno)
                        break;
                    }
                }
            })


            if (localStorage.getItem('VALORRETORNO') == '1') {
                return true;
                
            } else {
                alert("É necessário um login válido!")
                this.router.navigate([""]);
                return false;
            }
        }
    }
}

export default CheckLogged;