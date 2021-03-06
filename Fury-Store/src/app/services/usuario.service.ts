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

  buscarCarrinho() {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/Carrinho',
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

  inserirProduto(nome, preco, imagem) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_produto',
        {
          method: 'POST',
          body: JSON.stringify({
            nome, preco, imagem
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

  inserirUsuario(nome,sobrenome, password) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_usuario',
        {
          method: 'POST',
          body: JSON.stringify({
            nome, sobrenome,password
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

  inserirPedido2(cliente_id,cliente_nome , produto_valorfinal) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_pedido2',
        {
          method: 'POST',
          body: JSON.stringify({
            cliente_id,cliente_nome , produto_valorfinal
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

  inserirCarrinho(user_id, produto_id, produto_nome, produto_valor, produto_imagem) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_carrinho',
        {
          method: 'POST',
          body: JSON.stringify({
            user_id, produto_id, produto_nome, produto_valor, produto_imagem
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

  inserirFinalizarCompra(user_id, produto_id, produto_quantidade, produto_valortotal) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_finalizar_compra',
        {
          method: 'POST',
          body: JSON.stringify({
            user_id, produto_id, produto_quantidade, produto_valortotal
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

  buscarFinalizarCompra() {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/FinalizarCompra',
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

  excluirProduto(ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/ExcluirProduto',
        {
          method: 'POST',
          body: JSON.stringify({ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  ExcluirFinalizarCompra(ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/ExcluirFinalizarCompra',
        {
          method: 'POST',
          body: JSON.stringify({ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  excluirCliente(ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/ExcluirCliente',
        {
          method: 'POST',
          body: JSON.stringify({ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  excluirUsuario(ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/ExcluirUsuario',
        {
          method: 'POST',
          body: JSON.stringify({ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  excluirPedido(ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/ExcluirPedido',
        {
          method: 'POST',
          body: JSON.stringify({ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  excluirCarrinho(ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/ExcluirCarrinho',
        {
          method: 'POST',
          body: JSON.stringify({ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  editarProduto(nome,preco, ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/EditarProduto',
        {
          method: 'POST',
          body: JSON.stringify({nome, preco, ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  editarCliente(nome,sobrenome, ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/EditarCliente',
        {
          method: 'POST',
          body: JSON.stringify({nome, sobrenome, ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  checarUser(NOME, PASSWORD){
    return new Promise((resolve, reject) => {
      fetch('/api/checar_user',
        {
          method: 'POST',
          body: JSON.stringify({NOME, PASSWORD}),
          headers: { 'Content-Type': 'application/json' }
        }
      ).then(result => result.json())
        .then(resolvido => resolve(resolvido))
        .catch(reject)
    })
  }

}
