export const user1 = {
  name: 'Alina',
  score: 0,
  correctScore:[],
  topWords : []
};

export const user2 = {
  name: 'Denis',
  score: 0,
  correctScore:[],
  topWords : []
};

export const user3 = {
  name: 'Ruslan',
  score: 0,
  correctScore:[],
  topWords : []
};

localStorage.setItem('user1', JSON.stringify(user1));
localStorage.setItem('user2', JSON.stringify(user2));
localStorage.setItem('user3', JSON.stringify(user3));

