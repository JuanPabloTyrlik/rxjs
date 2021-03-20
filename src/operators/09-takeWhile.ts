import { fromEvent } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap(() => console.log('tap')),
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y >= 100)
    takeWhile(({ y }) => y < 150, true) // Emite el valor que rompe la condición
  )
  .subscribe({
    next: (val) => console.log('Next:', val),
    complete: () => console.log('Complete'),
  });
