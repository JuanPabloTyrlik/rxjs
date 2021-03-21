import { fromEvent } from 'rxjs';
import { map, sampleTime, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    tap((val) => console.log('tap', { x: val.x, y: val.y })),
    sampleTime(1000),
    map(({ x, y }) => ({
      x,
      y,
    }))
  )
  .subscribe(console.log);
