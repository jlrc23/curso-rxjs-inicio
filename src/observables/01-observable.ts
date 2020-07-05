import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log("siguiente [next]:", value),
    error: error =>  console.warn('error:', error),
    complete: ()=> console.log('completado')
}

const obs$ = new Observable(subs=>{
    subs.next('Hola 1');
    subs.next('Mundo 1');
    subs.next('Hola 2');
    subs.next('Mundo 2');

    //const a = undefined;
    //a.nombre = 'Fernando';
 
    subs.complete();
    subs.next('Hola 3');
    subs.next('Mundo 3');

});
obs$.subscribe(observer);
obs$.subscribe()
/*
obs$.subscribe(
    valor=>console.log('next: ', valor),
    error=> console.warn('error:', error),
    ()=>console.info('completado')
);*/






