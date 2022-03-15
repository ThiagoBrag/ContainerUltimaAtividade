import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login-v2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  username = '';
  user = '';
  password = '';

  constructor(
    private socialAuthService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.usuarioService.buscarUsuarios()
      .then(resultado => {
        console.log('RESULTADO:', resultado);
      }).catch(erro => {
        console.log('ERRO AO BUSCAR USUARIOS:', erro);
      })
  }

 public Google(socialPlatform : string) {
      let socialPlatformProvider;
      if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      
      
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          localStorage.setItem('USER', "ty");
          localStorage.setItem('PASSWORD', "ty");
          this.router.navigate(['/loja']);
        }
      );
    }
    
    // logar() {
    //   this.usuarioService.checarPessoa(this.user, this.password)
    //     .then((resultado: any) => {
    //       let result = resultado[0]
    //       if (result.PROFESSOR == 1) {
    //         this.usuarioService.dadosProfessor()
    //           .then((resultadoProfessor: any) => {
    //             resultadoProfessor.find(valorProfessor => {
    //               if (result.RG == valorProfessor.RG_PESSOA) {
    //                 this.checou = true
    //                 let id_professor = valorProfessor.ID
                    
    //                 localStorage.setItem("PROFESSOR", result.PROFESSOR.toString())
    //                 this.router.navigate(['professor/', id_professor])
    //                 return
    //               }
    //             })
    //           })
    //       } else {
    //         this.usuarioService.dadosAlunos()
    //           .then((resultadoALuno: any) => {
    //             resultadoALuno.find(valorAluno => {
    //               if (result.RG == valorAluno.RG_PESSOA) {
    //                 this.checou = true
    //                 localStorage.setItem("USER", result.USUARIO)
    //                 localStorage.setItem("PASSWORD", result.SENHA)
    //                 localStorage.setItem("PROFESSOR", result.PROFESSOR.toString())
    //                 let id_aluno = '0' + valorAluno.ID
    //                 this.router.navigate(['aluno/', id_aluno])
    //                 return
    //               }
    //             })
    //           })
    //       }
    //     })
    // }

  logar() {

    if (this.user && this.password) {
    this.usuarioService.checarUser(this.user, this.password)
    .then((resultado: any) => {
      if (resultado != "") {
        localStorage.setItem("NOME", resultado[0].NOME)
        localStorage.setItem("PASSWORD", resultado[0].PASSWORD)
        this.router.navigate(['/loja']);
      } else {
        alert('Usuário ou senha incorreta!');
      }
    
    })
  } else {
    alert('Preencha todos os campos!');
  }
    // localStorage.setItem('USER', this.username);
    // localStorage.setItem('PASSWORD', this.password);

    // if (this.username && this.password) {
    //   this.usuarioService.buscarUsuarios()
    //     .then((resultado: User[]) => {
    //       for (let i = 0; i < resultado.length; i++) {
    //         if (this.username == resultado[i].NOME && this.password == resultado[i].PASSWORD) {
    //           this.router.navigate(['/loja']);
    //           break;
    //         } else {
    //           alert('Usuário ou senha incorreta!');
    //           break;
    //         }
    //       }
    //     })
    // } else {
    //   alert('Preencha todos os campos!');
    // }
  }
}

interface User {
  NOME: string;
  PASSWORD: string;
}