import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';
import {
  GithubUser,
  GithubUsersResp,
} from '../interfaces/github-users.interface';

const body = document.querySelector('body');
const input = document.createElement('input');
const orderedList = document.createElement('ol');

const renderUsers = (users: GithubUser[]) => {
  orderedList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = `Go to ${user.login}`;
    anchor.target = '_blank';

    li.append(img);
    li.append(anchor);

    orderedList.append(li);
  });
};

body.append(input, orderedList);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
  .pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUsersResp>>((text) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    mergeAll(),
    pluck<GithubUsersResp, GithubUser[]>('items')
  )
  .subscribe((users) => renderUsers(users));
