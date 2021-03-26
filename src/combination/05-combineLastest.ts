import { combineLatest, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

combineLatest([
  keyUp$.pipe(pluck('code')),
  click$.pipe(map(({ x, y }) => `[${x},${y}]`)),
]).subscribe(console.log);
