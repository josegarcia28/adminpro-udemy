import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rsjx',
  templateUrl: './rsjx.component.html',
  styles: [
  ]
})
export class RsjxComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {
   

    // this.retornaObservable().pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   valor => console.log('subs', valor),
    //   error => console.warn('error', error),
    //   () => console.info('termino info')
    // );

    this.intervalSubs = this.retornaInterval().subscribe(console.log)

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaInterval(): Observable<number> {
    return interval(500)
                .pipe(
                  map( valor => valor + 1),
                  filter(valor => (valor % 2 == 0 ? true : false)),
                  //take(10)
                );

  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( (observ) => {
      const intervalo = setInterval( () => {
        i++;
        observ.next(i);

        if( i === 4 ) {
          clearInterval(intervalo);
          observ.complete();
        }

        if( i === 2) {
          observ.error('I llego al valor 2');
        }

      }, 1000)

    });
  }
}
