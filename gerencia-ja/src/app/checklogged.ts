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

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        ): Observable<boolean> | Promise<boolean> | boolean {
            console.log("Dentro")


            let user = localStorage.getItem("USER")
            let password = localStorage.getItem('PASSWORD')

            if(user && password){
                localStorage.removeItem('USER');
                localStorage.removeItem('PASSWORD')
            }

            if(user && password){
                console.log(user)
                return true;
            }else{
                alert('Usuário não cadastrado')
                this.router.navigate([''])
                return false;
            }


    }
}

export default CheckLogged;