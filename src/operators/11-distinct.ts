import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

const values$ = of<any>(1, '1', 1, 2, 2, 3, 3, 4, 5, 1, 3, 2);

values$
  .pipe(
    distinct() // === Comparison
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
    name: 'Megaman',
  },
];

from(pjs)
  .pipe(distinct((p) => p.name))
  .subscribe(console.log);
