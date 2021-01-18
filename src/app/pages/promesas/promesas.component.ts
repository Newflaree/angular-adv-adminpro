import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then( usuarios => {
      console.log( usuarios );
    });
    /*
    const promesa = new Promise( ( res, rej ) => {
      if ( false ) {
        res( 'Hola Mundo' ); 
      } else {
        rej( 'Algo salió mal' );
      }
    });

    promesa.then( ( mensaje ) => {
      console.log( mensaje );
    })
    .catch( err => console.log( 'Error en mi promesa', err ) );

    console.log( 'Fin del Init' );
    */
  }

  getUsuario() {
    return new Promise( resolve => {
      fetch( 'https://reqres.in/api/users' )
        .then( resp => resp.json() )
        .then( body => resolve( body.data ));
    });
  }

}
