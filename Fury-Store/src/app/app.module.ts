import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login-v2";

import { AppComponent } from './app.component';
import { LoginComponent } from './modulo-login/login/login.component';
import { ClientesComponent } from './modulo-resto/clientes/clientes.component';
import { CadastroClientesComponent } from './modulo-resto/cadastro-clientes/cadastro-clientes.component';
import { CadastroProdutosComponent } from './modulo-resto/cadastro-produtos/cadastro-produtos.component';
import { ProdutosComponent } from './modulo-resto/produtos/produtos.component';
import { PedidosComponent } from './modulo-resto/pedidos/pedidos.component';
import { CadstroPedidosComponent } from './modulo-resto/cadstro-pedidos/cadstro-pedidos.component';
import { CadastroComponent } from './modulo-cadastro/cadastro/cadastro.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LojaComponent } from './modulo-resto/loja/loja.component';
import { FormsModule} from '@angular/forms';
import CheckLogged from './checklogged';

const routes: Routes = [
  { path: '', component: CadastroComponent, canActivate: [] },
  { path: 'login', component: LoginComponent, canActivate: [] },
  { path: 'loja', component: LojaComponent, canActivate: [CheckLogged] },
  { path: 'clientes', component: ClientesComponent, canActivate: [CheckLogged] },
  { path: 'clientes/:id', component: CadastroClientesComponent, canActivate: [CheckLogged] },
  { path: 'produtos', component: ProdutosComponent, canActivate: [CheckLogged] },
  { path: 'produtos/:id', component: CadastroProdutosComponent, canActivate: [CheckLogged] },
  { path: 'pedidos', component: PedidosComponent, canActivate: [CheckLogged] },
  { path: 'pedidos/:id', component: CadstroPedidosComponent, canActivate: [CheckLogged] }
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("402231336047-9jsgeagvcoa8fqb6eled83fj2hnodt5d.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    ClientesComponent,
    CadastroClientesComponent,
    ProdutosComponent,
    CadastroProdutosComponent,
    PedidosComponent,
    CadstroPedidosComponent,
    LojaComponent,
    CadastroComponent,
  ],
  imports: [
    SocialLoginModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [CheckLogged,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
