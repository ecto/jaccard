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

console.log('Index should be 0.4:');
jaccard.index(a, b, console.log);

console.log('Distance should be 0.6:');
jaccard.distance(a, b, console.log);
