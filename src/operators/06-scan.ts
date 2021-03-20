import { from, range } from 'rxjs';
import { map, reduce, scan, tap } from 'rxjs/operators';

const totalAcc = (acc: number, curr: number) => acc + curr;

// Reduce

console.log('----------- Reduce -----------');

range(1, 5)
  .pipe(
    tap((num) => console.log('Current Value:', num)),
    reduce(totalAcc) // Emits total result
  )
  .subscribe((total) => console.log('Rxjs Reducer Operator', total));

// Scan

console.log('----------- Scan -----------');

const total$ = range(1, 5).pipe(
  tap((num) => console.log('Current Value:', num)),
  scan(totalAcc) // Emits partial results
);

total$.subscribe({
  next: (total) => console.log('Rxjs Scan Operator', total),
});

// Similarity to how redux works
console.log('----------- Redux -----------');

interface User {
  id: string;
  authenticated: boolean;
  token: string;
  age: number;
}

const users: Partial<User>[] = [
  { id: 'JP', authenticated: false, token: null },
  { id: 'JP', authenticated: true, token: 'ABC123' },
  { id: 'JP', authenticated: true, token: 'ASDQWE' },
];

const state$ = from(users).pipe(
  scan<Partial<User>>((acc, curr) => ({ ...acc, ...curr }), { age: 26 })
);

state$.subscribe(console.log);

const id$ = state$.pipe(map((user) => user.id));

id$.subscribe(console.log);
