import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

// const url = 'https://api.github.com/userXXs?per_page=5';
const url = 'https://httpbin.Sorg/delay/1';

const handleError = (resp: AjaxError) => {
  console.warn('error:', resp.message);
  return of({
    ok: false,
    users: [],
  });
};

// const obs$ = ajax.getJSON(url).pipe(catchError(handleError));
// const obs2$ = ajax(url).pipe(catchError(handleError));

const obs$ = ajax.getJSON(url);
// const obs2$ = ajax(url).pipe(catchError(handleError));

// obs$.subscribe((data) => console.log('getJSON:', data));
// obs2$.subscribe((data) => console.log('ajax:', data));

obs$.pipe(catchError(handleError)).subscribe({
  next: (val) => console.log('Next:', val),
  error: (err) => console.log('Error:', err),
  complete: () => console.log('Complete'),
});
