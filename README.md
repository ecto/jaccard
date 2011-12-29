#jaccard

![jaccard](http://i.imgur.com/v4TrU.png)

[Wikipedia has a pretty great explaination of the algorithm and why it's useful.](http://en.wikipedia.org/wiki/Jaccard_index)

##install

    npm install jaccard

##usage

````javascript
var jaccard = require('jaccard');

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

console.log(
  jaccard.index(a, b)
);
````
