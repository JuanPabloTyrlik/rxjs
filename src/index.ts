import { of } from 'rxjs';
import {
  catchError,
  dematerialize,
  map,
  mapTo,
  materialize,
  switchMap,
  tap,
  toArray,
} from 'rxjs/operators';

// https://iamturns.medium.com/continue-rxjs-streams-when-errors-occur-c6a031f9a6cf

const source$ = of('a', 2, 'c', new Error(), 'e');

// To recover from an error generated on source, materialize-dematerialize can be used
source$.pipe(materialize(), dematerialize()).subscribe(console.log);

// Errors on operators always complete the observable, hence we need to create a disposableStream$
// to recover from an error and continue with the main stream
source$.pipe(
  switchMap((x) => {
    const disposableStream$ = of(x);
    return disposableStream$.pipe(
      map((value) => {
        if (typeof value !== 'string') {
          throw new Error('This is an error');
        }
        return value;
      }),
      catchError((err) => of(err.message))
    );
  })
);
// .subscribe(console.log);

source$
  .pipe(
    toArray(),
    map((v) => v.toString().toUpperCase()),
    tap(console.log)
  )
  .subscribe();
