import { fromEvent, interval } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
  .pipe(
    map(({ x }) => x),
    tap((x) => console.log('tap', x)),
    auditTime(2000)
  )
  .subscribe(console.log);
