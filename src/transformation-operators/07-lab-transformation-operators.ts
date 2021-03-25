import { fromEvent, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { catchError, exhaustMap, map, pluck, tap } from 'rxjs/operators';

const body = document.querySelector('body');
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitBtn.innerHTML = 'Log in';

form.append(
  document.createElement('br'),
  inputEmail,
  document.createElement('br'),
  document.createElement('br'),
  inputPassword,
  document.createElement('br'),
  document.createElement('br'),
  submitBtn
);

body.append(form);

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
  tap((e) => e.preventDefault()),
  map((e) => ({
    email: e.target[0].value,
    password: e.target[1].value,
  })),
  exhaustMap((body) =>
    ajax.post('https://reqres.in/api/login?delay=1', body).pipe(
      pluck<AjaxResponse, string>('response', 'token'),
      catchError((err) => {
        alert(err.response.error);
        return of('');
      })
    )
  )
);

submitForm$.subscribe({
  next: (token) => token && console.log('Token:', token),
});
