import { forkJoin, of, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const GITHUB_API_USERS = 'https://api.github.com/users';
const GITHUB_USER = 'JuanPabloTyrlik';

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}/repos`),
  gists: ajax.getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}/gists`),
}).subscribe(console.log);

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}`),
  repos: ajax
    .getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}/repos1213`)
    .pipe(catchError(() => of([]))),
  gists: ajax.getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}/gists`),
}).subscribe(console.log);

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}/repos1213`),
  gists: ajax.getJSON(`${GITHUB_API_USERS}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((error) => of(error)))
  .subscribe(console.log);
