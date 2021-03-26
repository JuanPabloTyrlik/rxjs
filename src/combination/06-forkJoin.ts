import { forkJoin, interval, of, range } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const numbers$ = range(1, 5);
const interval$ = interval(500).pipe(take(3));
const letters$ = of('a', 'b', 'c').pipe(delay(3000));

forkJoin([numbers$, interval$, letters$]).subscribe(console.log);
forkJoin({ numbers$, interval$, letters$ }).subscribe(console.log);
