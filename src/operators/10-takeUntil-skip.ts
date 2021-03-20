import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, 'click');
const clickBtn$ = fromEvent(button, 'click').pipe(
  tap(() => console.log('Before Skip')),
  skip(1),
  tap(() => console.log('After Skip'))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (value) => console.log('Counter: ', value),
  complete: () => console.log('Complete'),
});
