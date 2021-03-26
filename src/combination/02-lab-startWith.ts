import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

const loadingDiv = document.createElement('div');
loadingDiv.innerHTML = 'Loading...';
loadingDiv.classList.add('loading');

ajax
  .getJSON('https://reqres.in/api/users/2?delay=3')
  .pipe(startWith(true))
  .subscribe((resp) => {
    if (resp === true) {
      document.querySelector('body').append(loadingDiv);
    } else {
      document.querySelector('body').removeChild(loadingDiv);
    }
    console.log(resp);
  });
