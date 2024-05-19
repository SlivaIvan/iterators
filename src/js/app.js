/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
import Character from './character';

export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  // eslint-disable-next-line no-undef
  [Symbol.iterator]() {
    let i = 0;
    const { characters } = this;

    return {
      next() {
        if (i < characters.length) {
          return { value: characters[i++], done: false };
        }
        return { done: true };
      },
    };
  }
}

const iTeam = new Team();

iTeam.addCharacter(new Character('Name1', 'type', 1, 1, 1, 1));
