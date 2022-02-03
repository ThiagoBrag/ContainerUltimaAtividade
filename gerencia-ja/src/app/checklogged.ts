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
 
    usuarios = [
        {username: "thiago", password: "123"},
        {username:"a", password: "a"}
    ];

 
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        ): Observable<boolean> | Promise<boolean> | boolean {
            console.log("Dentro")
 
            let username = localStorage.getItem("USER")
            let password = localStorage.getItem('PASSWORD')

            const user = this.usuarios.find((item) => item.username === username);

            if(user.password == password && user.username == username){
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