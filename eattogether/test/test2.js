// test2.js
var _ = require('lodash');

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];

// Sort by `user` in ascending order and by `age` in descending order.
var arr = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
console.log('arr=', arr);
