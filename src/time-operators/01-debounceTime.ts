import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

// click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$
  .pipe(debounceTime(500), pluck('target', 'value'), distinctUntilChanged())
  .subscribe(console.log);
