import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1, 5)
  .pipe(map((val) => val * 10))
  .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$
  .pipe(map((key) => key.code))
  .subscribe((key) => console.log('map:', key));

keyUp$
  .pipe(pluck('target', 'baseURI'))
  .subscribe((value) => console.log('pluck:', value));

keyUp$.pipe(mapTo('Key Pressed')).subscribe(console.log);

// keyUp$.subscribe(console.log);
