var jaccard = require('../jaccard');

var a = [
 '1',
 '2',
 '3'
];

var b = [
  '3',
  '4',
  '5'
];

console.log('Index should be 0.2:');
jaccard.index(a, b, console.log);

console.log('Distance should be 0.8:');
jaccard.distance(a, b, console.log);
