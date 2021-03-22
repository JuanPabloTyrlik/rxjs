import { ajax } from 'rxjs/ajax';

// const url = 'https://api.github.com/userXXs?per_page=5';
const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'x-api-token': 'ABASDASD123.asdasdasdasd.123123123',
});

obs$.subscribe(console.log);
