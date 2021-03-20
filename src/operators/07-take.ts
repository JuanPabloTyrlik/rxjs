import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(tap(console.log));

numbers$
  .pipe(
    tap((t) => console.log('tap subs', t)),
    take(3)
  )
  .subscribe((val) => console.log('subs', val));
