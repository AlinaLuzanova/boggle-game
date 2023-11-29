export const user1 = {
  name: 'Alina',
  score: [0],
  correctScore: [],
  topWords: [],
  allWords: [],
};

export const user2 = {
  name: 'Denis',
  score: [0],
  correctScore: [],
  topWords: [],
  allWords: [],
};

export const user3 = {
  name: 'Ruslan',
  score: [0],
  correctScore: [],
  topWords: [],
  allWords: [],
};

function getFromLocalStorage(key){
  if (!localStorage.getItem((key))){
    localStorage.setItem(key, JSON.stringify(key));
  }
}

getFromLocalStorage('user1');
getFromLocalStorage('user2');
getFromLocalStorage('user3');
