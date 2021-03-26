import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

merge(keyUp$.pipe(pluck('type')), click$.pipe(pluck('type'))).subscribe(
  console.log
);
