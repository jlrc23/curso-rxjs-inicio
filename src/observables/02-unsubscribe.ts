import {Observable, Observer, Subscriber} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log("[next]:", value),
    error: error =>  console.warn('[error]', error),
    complete: ()=> console.info('[completado]')
};

const intervalo$ = new Observable(subscriber=>{
    let resultado = 0;
    const interval = setInterval(()=>{
        resultado++
        subscriber.next(resultado);
        console.log(resultado);
    }, 1000);

    setTimeout(()=>{
        subscriber.complete();
    },3000);

    return ()=>{
        clearInterval(interval);
        console.log('intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
    .add(subs3)

setTimeout(()=>{
    subs1.unsubscribe();
    //subs2.unsubscribe();
    //subs3.unsubscribe();
    console.log('Completado timeout');
}, 5000)