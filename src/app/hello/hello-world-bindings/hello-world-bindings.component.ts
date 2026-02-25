import { Component, ElementRef } from '@angular/core';
import { first, of, map, from, Observable, interval, timer, take, mergeAll, fromEvent, switchAll, multicast, Subject } from 'rxjs';
import { ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html',
})
export class HelloWorldBindingsComponent {
  fontColor = 'blue';
  sayHelloId = 1;
  canClick = true;
  pointer = 'pointer';
  message = 'Hello, World';

  ngOnInit() {
 


// Observable thường (cold)
const source$ = interval(1000).pipe(take(5));

// Dùng Subject để multicast
const subject = new Subject<number>();
const multicasted$ = source$.pipe(
  // Chia sẻ execution
  multicast(subject)
);

// Subscriber 1 (sau 0s)
multicasted$.subscribe(v => console.log('Sub1:', v));

// Subscriber 2 (sau 2s)
setTimeout(() => {
  multicasted$.subscribe(v => console.log('Sub2:', v));
}, 2000);

// Kết nối source với subject
// multicasted$.connect();


  }
  
  
}
