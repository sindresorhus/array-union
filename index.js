'use strict';
const arrayUniq = require('array-uniq');

module.exports = function (...args) {
	return arrayUniq([].concat(...args));
};
