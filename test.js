import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m([1, 2, 2, 3, 1, 2, 4], [1, 2, 3, 6, 7]), [1, 2, 3, 4, 6, 7]);
	t.deepEqual(m([1, 2, 2, 3, 1, 2, 4], ['c', 'a', 'd']), [1, 2, 3, 4, 'c', 'a', 'd']);
	t.deepEqual(m(['a', 'a', 'b', 'a'], ['c', 'a', 'd']), ['a', 'b', 'c', 'd']);
});
