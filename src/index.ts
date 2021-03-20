import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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

from(pjs).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);
