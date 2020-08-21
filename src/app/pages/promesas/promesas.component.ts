import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getUsuario().then( resp => {
      console.log(resp);
    });
  //   const promesa = new Promise( (resolve, reject) => {

  //     if( true ) {
  //       resolve('operacion exitosa');
  //     } else {
  //       reject('operacion fallo');
  //     }

  //   });

  //   promesa.then( (mensaje) => {
  //     console.log(mensaje);
  //   })

  //   .catch( error => console.log('algo fallo', error));

  //   console.log('Fin del init');

  // }

}

  getUsuario() {
    return new Promise( (resolve) => {
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json())
        .then( body => resolve(body.data))
    });
 
  }

}