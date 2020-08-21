import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router, private route: ActivatedRoute) { 
    // otra forma de implementacion
    // console.log(route.snapshot.children[0].data);
    // no es recomendable este metodo puesto que solo escucha los cambios del padre y no del hijo

    this.tituloSubs$ = this.getDataRuta()
                        .subscribe( ({titulo}) => {
                          this.titulo = titulo;
                          document.title = `AdminPro - ${titulo}`;
                        });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getDataRuta() {
    return this.router.events
    .pipe(
      filter( resp => resp instanceof ActivationEnd),
      filter( (resp: ActivationEnd) => resp.snapshot.firstChild === null ),
      map( (resp: ActivationEnd) => resp.snapshot.data)
    )
   
  }

 

}
