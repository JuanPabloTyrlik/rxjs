import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap(() => console.log('tap')),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((e) => e.clientY >= 100)
  )
  .subscribe({
    next: (val) => console.log('Next:', val),
    complete: () => console.log('Complete'),
  });
