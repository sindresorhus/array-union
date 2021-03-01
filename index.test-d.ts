import {expectType} from 'tsd';
import arrayUnion from './index.js';

expectType<readonly number[]>(arrayUnion([1, 1, 2, 3] as readonly number[], [2, 3] as readonly number[]));
expectType<number[]>(arrayUnion([1, 1, 2, 3], [2, 3]));
expectType<number[]>(arrayUnion([1, 1, 2, 3], [2, 3]));
expectType<string[]>(arrayUnion(['foo', 'foo', 'bar']));
expectType<string[]>(arrayUnion(['🐱', '🦄', '🐻'], ['🦄', '🌈']));
expectType<string[]>(
	arrayUnion(['🐱', '🦄'], ['🐻', '🦄'], ['🐶', '🌈', '🌈'])
);
