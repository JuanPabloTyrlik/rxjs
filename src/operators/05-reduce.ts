import { from } from 'rxjs';
import { reduce, tap } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];

const totalAcc = (acc: number, curr: number) => acc + curr;

const total = numbers.reduce(totalAcc);

console.log('JS Reduce', total);

const total$ = from(numbers).pipe(
  tap((num) => console.log('Current Value:', num)),
  reduce(totalAcc) // Emits when observer is completed
);

total$.subscribe({
  next: (total) => console.log('Rxjs Reduce Operator', total),
});
