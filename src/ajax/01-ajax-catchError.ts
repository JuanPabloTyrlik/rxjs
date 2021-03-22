import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

// const handleError = (resp: Response) => {
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   return resp;
// };

const url = 'https://api.github.com/userXXs?per_page=5';

// fetch(url)
//   .then(handleError)
//   .then((resp) => resp.json())
//   .then((data) => console.log('data', data))
//   .catch((err) => console.error('Error:', err));

ajax(url)
  .pipe(
    pluck('response'),
    catchError(() => of([]))
  )
  .subscribe(console.log);
