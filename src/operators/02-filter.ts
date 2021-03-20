import { from, fromEvent } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

interface Character {
  type: string;
  name: string;
}

const characters: Character[] = [
  {
    type: 'hero',
    name: 'Batman',
  },
  {
    type: 'hero',
    name: 'Robin',
  },
  {
    type: 'villain',
    name: 'Joker',
  },
];

const heroes$ = from(characters).pipe(filter((hero) => hero.type === 'hero'));
const villains$ = from(characters).pipe(
  filter((hero) => hero.type === 'villain')
);

heroes$.subscribe((hero) => console.log('Hero:', hero));

villains$.subscribe((villain) => console.log('Villain:', villain));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code),
  filter((key) => key === 'Enter'),
  mapTo('Enter was pressed')
);

keyup$.subscribe(console.log);
