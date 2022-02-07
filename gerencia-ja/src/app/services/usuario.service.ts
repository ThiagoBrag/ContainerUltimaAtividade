import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

login(nickname, password) {
  return new Promise((resolve, reject) => {
    fetch('/api/login',
    {
      method: 'POST', 
      body: JSON.stringify(
      {
        nickname: nickname, password: password
      }
    ),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  ).then(function (result) {
    return result.json();
  }).then(resolve).catch(reject);
  });
}

}
