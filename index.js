'use strict';

module.exports = (...arguments_) => {
	return [...new Set([...[...arguments_]])];
};
