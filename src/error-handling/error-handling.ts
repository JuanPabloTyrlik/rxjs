import { of } from 'rxjs';
import { catchError, map, materialize, switchMap } from 'rxjs/operators';

const source$ = of('a', 2, 'c', new Error(), 'e');

// To recover from an error generated on source, materialize-dematerialize can be used
source$.pipe(materialize());

// Errors on operators always complete the observable, hence we need to create a disposableStream$
// to recover from an error and continue with the main stream
source$
  .pipe(
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
  )
  .subscribe(console.log);
