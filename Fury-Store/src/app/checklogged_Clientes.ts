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
class CheckLogged_Clientes implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {


        let username = localStorage.getItem('NOME')
        let password = localStorage.getItem('PASSWORD')

        if (username && password) {
            if (username != 'Thiago' && password != '123') {
                return true
            }
        } else {
            alert("É necessário um login válido!")
            this.router.navigate([""]);
            return false;
        }

    }
}

export default CheckLogged_Clientes;