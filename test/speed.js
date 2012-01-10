var jaccard = require('../jaccard');
var title;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

function test (title, cb) {
  var start = +new Date();
  cb(function (i) {
    var end = +new Date();
    var time = end - start;
    console.log(title + ' took ' + time);
    console.log('  ' + i);
  });
}

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

test('Async index of two sets of length 3', function (cb) {
  jaccard.index(a, b, cb);
});

test('Sync index of two sets of length 3', function (cb) {
  cb(jaccard.index(a, b));
});

title = 'Set up medium array';
console.time(title);
a = [], b = [];
for (var i = 0; i < 500; ++i) a[i] = i;
for (var i = 250; i < 750; ++i) b[i] = i;
a = shuffle(a);
b = shuffle(b);
console.timeEnd(title);

test('Async index of two sets of length 500', function (cb) {
  jaccard.index(a, b, cb);
});

test('Sync index of two sets of length 500', function (cb) {
  cb(jaccard.index(a, b));
});

title = 'Set up large array';
console.time(title);
a = [], b = [];
for (var i = 0; i < 50000; ++i) a[i] = i;
for (var i = 25000; i < 75000; ++i) b[i] = i;
a = shuffle(a);
b = shuffle(b);
console.timeEnd(title);

test('Async index of two sets of length 50,000', function (cb) {
  jaccard.index(a, b, cb);
});

test('Sync index of two sets of length 50,000', function (cb) {
  cb(jaccard.index(a, b));
});

