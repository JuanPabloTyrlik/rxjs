import { fromEvent, interval, of } from 'rxjs';
import { last, map, mergeMap, take, takeUntil } from 'rxjs/operators';

const letters$ = of('a', 'b', 'c');

letters$.pipe(
  mergeMap((letter) =>
    interval(1000).pipe(
      map((i) => letter + i),
      take(5)
    )
  )
);
// .subscribe({
//   next: (value) => console.log('Next:', value),
//   complete: () => console.log('Complete'),
// });

const mouseUp$ = fromEvent(document, 'mouseup');
const mouseDown$ = fromEvent(document, 'mousedown');
const interval$ = interval();

mouseDown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$), last())))
  .subscribe(console.log);
