import { asyncScheduler, range } from 'rxjs';

const range$ = range(1, 15, asyncScheduler);

console.log('Start');
range$.subscribe(console.log);
console.log('End');
