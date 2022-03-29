import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { UsuarioService } from 'src/app/services/usuario.service'

@Component({
  selector: 'app-cadstro-pedidos',
  templateUrl: './cadstro-pedidos.component.html',
  styleUrls: ['./cadstro-pedidos.component.css']
})
export class CadstroPedidosComponent implements OnInit {
  id = undefined;
  enderecoId;
  index;
  cep = '';
  pais = '';
  estado = '';
  cidade = '';
  bairro = '';
  rua = '';
  numero = '';
  pedidos = [];
  produtos = [];
  clientes = [];
  clienteId = undefined;
  produtoId = undefined;
  ProdutoId = undefined;
  status: 'ABERTO';
  nomePessoa = ''
  nomeProduto = ''

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.pedidos = JSON.parse(localStorage.getItem('PEDIDOS')) || [];
    this.clientes = JSON.parse(localStorage.getItem('CLIENTES')) || [];
    this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];

    if (id != 'novo') {
      this.id = parseInt(id);

      if (this.pedidos[this.id]) {
        this.clienteId = this.pedidos[this.id].clienteId;
        this.ProdutoId = this.pedidos[this.id].listaProdutosId;
      }
    }
  }


  ngOnInit() {

    if (this.id != 'novo') {
      this.index = this.router.url.substring(this.router.url.length - 1);
      this.usuarioService.buscarPedido()
        .then((resultado: any) => {
          resultado.find(valorBusca => {
            if (valorBusca.ID == this.index) {
              this.clienteId = valorBusca.CLIENTE_ID;
              this.ProdutoId = valorBusca.PRODUTO_ID;
              this.enderecoId = valorBusca.ENDERECO_ID;
              console.log("ID CLIENTE ", valorBusca.CLIENTE_ID, "ID PRODUTO ", valorBusca.PRODUTO_ID, "ID ENDERECO ", valorBusca.ENDERECO_ID)

              this.usuarioService.buscarEndereco().then((resultado: any) => {
                resultado.find(valorEndereco => {
                  if (valorEndereco.ID == this.enderecoId) {

                    this.pais = valorEndereco.PAIS;
                    this.estado = valorEndereco.ESTADO;
                    this.cidade = valorEndereco.CIDADE;
                    this.bairro = valorEndereco.BAIRRO;
                    this.rua = valorEndereco.RUA;
                    this.numero = valorEndereco.NUMERO;
                    localStorage.setItem('NUMEROANTIGO', this.numero);
                    this.cep = valorEndereco.CEP;
                    localStorage.setItem('CEPANTIGO', this.cep)

                  }
                })
              })
            }
          })
        })

    }

    this.usuarioService.buscarCliente()
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          let info = {
            nome: resultado[i].NOME,
            surname: resultado[i].SOBRENOME
          }
          this.clientes.push(info)
        }
      })

    this.usuarioService.buscarProduto()
      .then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          let info = {
            nome: resultado[i].NOME,
          }
          this.produtos.push(info)
        }
      })
  }

  cadastrar() {

    if (this.clienteId && this.ProdutoId && this.pais && this.estado && this.cidade && this.bairro && this.rua && this.numero && this.cep) {

      this.usuarioService.inserirEndereco(this.pais, this.estado, this.cidade, this.bairro, this.rua, this.numero, this.cep)
      this.usuarioService.buscarEndereco().then((resultado: any) => {
        for (let i = 0; i < resultado.length; i++) {
          if (this.numero == resultado[i].NUMERO && this.cep == resultado[i].CEP) {

            this.enderecoId = resultado[i].ID;
            this.usuarioService.inserirPedido(this.clienteId, this.ProdutoId, this.enderecoId)
            this.router.navigate(['/pedidos']);
            break;
          }
        }
      });
    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

  editar() {

    if (this.pais && this.estado && this.cidade && this.bairro && this.rua && this.numero && this.cep) {
      
      this.usuarioService.buscarEndereco().then((resultado: any) => {
        
        for (let i1 = 0; i1 < resultado.length; i1++) {
          let NumeroAntigo = localStorage.getItem('NUMEROANTIGO')
          let CepAntigo = localStorage.getItem('CEPANTIGO')
          
          if (NumeroAntigo == resultado[i1].NUMERO && CepAntigo == resultado[i1].CEP) {
            let idAntigo = resultado[i1].ID;
            
            this.usuarioService.editarEndereco(this.pais, this.estado, this.cidade, this.bairro, this.rua, this.numero, this.cep, idAntigo)

            this.usuarioService.buscarEndereco().then((resultado: any) => {
              for (let i2 = 0; i2 < resultado.length; i2++) {
                
                if (this.numero == resultado[i2].NUMERO && this.cep == resultado[i2].CEP) {
                  this.enderecoId = resultado[i2].ID;
                  
                  this.usuarioService.buscarPedido().then((resultado: any) => {
                    
                    for (let i3 = 0; i3 < resultado.length; i3++) {
                      
                      if (resultado[i3].ENDERECO_ID == this.enderecoId) {
                        
                        let PedidoId = resultado[i3].ID;
                        this.usuarioService.editarPedido(this.clienteId, this.ProdutoId , this.enderecoId, PedidoId)
                        console.log("PEDIDOS DEPOIS DE EDITADO: ", resultado)
                        this.router.navigate(['/pedidos']);
                        break;
                      }

                    }
                  })


                }
              }
            });
          }
        }
      });

    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

}

