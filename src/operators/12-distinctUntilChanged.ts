import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const values$ = of<number | string>(1, 1, 1, 2, 2, 3, 3, 4, 5, 1, 3, 2);

values$
  .pipe(
    distinctUntilChanged() // === Comparison
  )
  .subscribe(console.log);

interface Pj {
  name: string;
}

const pjs: Pj[] = [
  {
    name: 'Megaman',
  },
  {
    name: 'Megaman',
  },
  {
    name: 'X',
  },
  {
    name: 'X',
  },
  {
    name: 'Zero',
  },
  {
    name: 'Dr. Willy',
  },
  {
    name: 'X',
  },
  {
    name: 'Zero',
  },
  {
    name: 'Zero',
  },
  {
    name: 'Megaman',
  },
];

from(pjs)
  .pipe(distinctUntilChanged((a, b) => a.name === b.name))
  .subscribe(console.log);
