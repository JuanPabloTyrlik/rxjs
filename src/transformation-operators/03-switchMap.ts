import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, switchMap } from 'rxjs/operators';

const body = document.querySelector('body');
const input = document.createElement('input');

body.append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

const url = 'https://httpbin.org/delay/1?arg=';

input$
  .pipe(
    pluck('target', 'value'),
    switchMap((text) => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
