'use strict';
var assert = require('assert');
var arrayUnion = require('./');

it('should union array items', function () {
	assert.deepEqual(arrayUnion([1, 2, 2, 3, 1, 2, 4], [1, 2, 3, 6, 7]), [1, 2, 3, 4, 6, 7]);
	assert.deepEqual(arrayUnion(['a', 'a', 'b', 'a'], ['c', 'a', 'd']), ['a', 'b', 'c', 'd']);
});
