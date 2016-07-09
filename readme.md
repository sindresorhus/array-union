# array-union [![Build Status](https://travis-ci.org/sindresorhus/array-union.svg?branch=master)](https://travis-ci.org/sindresorhus/array-union)

> Create an array of unique values, in order, from the input arrays


## Install

```
$ npm install --save array-union
```


## Usage

```js
const arrayUnion = require('array-union');

arrayUnion([1, 1, 2, 3], [2, 3]);
//=> [1, 2, 3]

arrayUnion(['foo', 'foo', 'bar']);
//=> ['foo', 'bar']

arrayUnion(['cat', 'unicorn', 'bear'], ['unicorn', 'rainbow']);
//=> ['cat', 'unicorn', 'bear', 'rainbow']

arrayUnion(['cat', 'unicorn'], ['bear', 'unicorn'], ['dog', 'rainbow', 'rainbow']);
//=> ['cat', 'unicorn', 'bear', 'dog', 'rainbow']
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
