import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

// const url = 'https://api.github.com/userXXs?per_page=5';
const url = 'https://httpbin.org/delay/1';

ajax
  .get(url, {
    'Content-Type': 'application/json',
  })
  .subscribe((data) => console.log('GET:', data));

ajax
  .post(
    url,
    {
      id: 1,
      name: 'Juan',
    },
    {
      'Content-Type': 'application/json',
    }
  )
  .subscribe((data) => console.log('POST:', data));

ajax
  .put(
    url,
    {
      id: 1,
      name: 'Juan',
    },
    {
      'Content-Type': 'application/json',
    }
  )
  .subscribe((data) => console.log('PUT:', data));

ajax
  .delete(url, {
    'Content-Type': 'application/json',
  })
  .subscribe((data) => console.log('DELETE:', data));

ajax({
  url,
  method: 'POST',
  body: {
    id: 1,
    name: 'Juan',
  },
  headers: {
    'Content-Type': 'application/json',
  },
}).subscribe(console.log);
