import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((n) => console.log('antes', n)),
    map((val) => val * 10),
    tap({
      next: (n) => console.log('después', n),
      complete: () => console.log('Se terminó todo'),
    })
  )
  .subscribe((value) => console.log('Subs', value));
