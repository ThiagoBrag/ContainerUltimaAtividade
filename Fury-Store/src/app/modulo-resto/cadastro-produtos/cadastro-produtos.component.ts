import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {
  id = undefined;
  produtos = [];
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;

    if (id != 'novo') {
      this.id = parseInt(id) - 1;

      if (this.produtos[this.id]) {
        this.name = this.produtos[this.id].name;
        this.price = this.produtos[this.id].price;
      }
    }
  }

  name: '';
  price: 0;
  index


  ngOnInit() {

    if (this.id != 'novo') {
    this.index = this.router.url.substring(this.router.url.length - 1);
    this.usuarioService.buscarProduto()
      .then((resultado: any) => {
        resultado.find(valorProduto => {
          if (valorProduto.ID == this.index) {
          this.name = valorProduto.NOME;
          this.price = valorProduto.VALOR
          console.log("PRODUTO ID ", valorProduto.ID)
          }
        })
      })
    }
  }


  srcResult

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  imageURL
  input;

  limparImagem() {
    console.log('limpar');
    this.imageUrl = '';

    this.input.value = '';


  }

  imageUrl = '';

  imagemMudou(event) {
    this.input = event.target
    console.log(event);

    const reader = new FileReader()

    reader.onload = (result) => {
      this.imageUrl = result.target.result as string;
    }

    reader.readAsDataURL(event.target.files[0]);
  }


  cadastrar() {
    if (this.name && this.price) {
      this.usuarioService.inserirProduto(this.name, this.price)
      this.router.navigate(['/produtos']);
    } else {
      alert('É necessário preencher todos os campos!');
    }
  }

  editar() {
    if (this.name && this.price) {
      this.usuarioService.editarProduto(this.name, this.price, this.index).then((result) => {
        this.router.navigate(['/produtos']);
      })
      
    } else {
      alert('É necessário preencher todos os campos!')
    }
  }

}

// EDITAR NOMES DE TUDO, CONTINUANDO DE CADASTRO PRODUTOS
