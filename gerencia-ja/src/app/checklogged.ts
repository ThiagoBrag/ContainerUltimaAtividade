import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
 
@Injectable()
class CheckLogged implements CanActivate{
    constructor(
        private router: Router
    ){}
 
        login = "thiago"
        senha = "123"
 
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        ): Observable<boolean> | Promise<boolean> | boolean {
            console.log("Dentro")
 
            let username = localStorage.getItem("USER")
            let password = localStorage.getItem('PASSWORD')

            if(this.login == username && this.senha == password){
                return true;
            }else{
                localStorage.removeItem('USER');
                localStorage.removeItem('PASSWORD')
                alert('Usuário não cadastrado')
                this.router.navigate([''])
                return false;
            }
 
 
    }
}
 
export default CheckLogged;