import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  buscarUsuarios() {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  inserirProduto(nome, preco) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_produto',
        {
          method: 'POST',
          body: JSON.stringify({
            nome, preco
          }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  inserirCliente(nome, sobrenome) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_cliente',
        {
          method: 'POST',
          body: JSON.stringify({
            nome, sobrenome
          }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  inserirPedido(cliente_id, produto_id) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_pedido',
        {
          method: 'POST',
          body: JSON.stringify({
            cliente_id, produto_id
          }
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  buscarPedido() {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/Pedido',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  buscarProduto() {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/Produto',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  buscarCliente() {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/Cliente',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  // excluirProduto() {
  //   return new Promise((resolvido, rejeitado) => {
  //     fetch('/api/Cliente',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }
  //       }).then(resultado => resultado.json())
  //       .then(result => resolvido(result))
  //       .catch(rejeitado);
  //   });
  // }

}
