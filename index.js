'use strict';

module.exports = function (...args) {
	return [...new Set([].concat(...args))];
};
