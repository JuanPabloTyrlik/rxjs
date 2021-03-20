import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<number>(...[1, 2, 3, 4], 5, 6);
// const obs$ = of(
//   [1, 2],
//   true,
//   { a: 1, b: 2 },
//   function () {},
//   Promise.resolve(true)
// );

console.log("Start");

obs$.subscribe({
  next: (next) => console.log("Next: ", next),
  error() {},
  complete: () => console.log("Complete!"),
});

console.log("End");
