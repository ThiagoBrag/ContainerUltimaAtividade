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

  inserirPedido(cliente_id, produto_id, endereco_id) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_pedido',
        {
          method: 'POST',
          body: JSON.stringify({
            cliente_id, produto_id, endereco_id
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

  inserirEndereco(pais, estado, cidade, bairro, rua, numero, cep) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/inserir_endereco',
        {
          method: 'POST',
          body: JSON.stringify({
            pais, estado, cidade, bairro, rua, numero, cep
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

  buscarEndereco() {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/Endereco',
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

  excluirEndereco(ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/ExcluirEndereco',
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

  editarPedido(cliente_id, produto_id, endereco_id, ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/EditarPedido',
        {
          method: 'POST',
          body: JSON.stringify({cliente_id, produto_id, endereco_id, ID}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(resultado => resultado.json())
        .then(result => resolvido(result))
        .catch(rejeitado);
    });
  }

  editarEndereco(pais, estado, cidade, bairro, rua, numero, cep, ID) {
    return new Promise((resolvido, rejeitado) => {
      fetch('/api/EditarEndereco',
        {
          method: 'POST',
          body: JSON.stringify({pais, estado, cidade, bairro, rua, numero, cep, ID}),
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
