#jaccard

![jaccard](http://i.imgur.com/v4TrU.png)

[Wikipedia has a pretty great explaination of the algorithm and why it's useful.](http://en.wikipedia.org/wiki/Jaccard_index)

##install

    npm install jaccard

##methods

###jaccard.index(a, b, cb)

Compute the similarity of two sets.

`cb` is an optional callback.

###jaccard.distance(a, b, cb)

Compute the dissimilarity of two sets.

`cb` is an optional callback.

##usage

Define your sets:

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
````

Process synchronously:

````javascript
console.log(
  jaccard.index(a, b)
);

// 0.2
````

Or asynchronously:

````javascript
jaccard.index(a, b, console.log);

// 0.2
````

##license

(The MIT License)

Copyright (c) 2011 Cam Pedersen <cam@campedersen.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

