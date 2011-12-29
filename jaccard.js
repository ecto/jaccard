/*
 * jaccard
 * <cam@onswipe.com>
 */

/*
 * Return a count of mutual elements in the input sets
 */
var intersection = function (a, b) {
  var x = [];

  a.forEach(function (e) {
    if (e in b) x.push(e);
  });

  return x.length;
}

/*
 * Return a count of all distinct elements from both input sets
 */
var union = function () {
  var x = [];

  for (var i in arguments) {
    for (var j in arguments[i]) {
      if (~x.indexOf(arguments[i][j])) {
        x.push(a[i]);
      }
    }
  }

  return x.length;
}

/*
 * Similarity
 */
var index = function (a, b) {
  return intersection(a, b) / union(a, b);
}

/*
 * Dissimilarity
 */
var distance = function (a, b) {
  return 1 - index(a, b);
}

/*
 * Say cheese
 */
module.exports = {
  index: index,
  distance: distance
}
