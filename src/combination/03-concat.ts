import { concat, interval, of } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(500);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  interval$.pipe(take(3)),
  [4, 5, 6, 4, 4],
  of(1, 2, 3)
).subscribe(console.log);
