import { test } from 'node:test';
import assert from 'node:assert/strict';
import { who5Score, who5Band } from '../src/who5.mjs';

test('score is the raw sum times 4', () => {
  assert.equal(who5Score([5, 5, 5, 5, 5]), 100);
  assert.equal(who5Score([0, 0, 0, 0, 0]), 0);
  assert.equal(who5Score([3, 3, 3, 3, 3]), 60);
});

test('bands', () => {
  assert.equal(who5Band(28), 'low');
  assert.equal(who5Band(29), 'reduced');
  assert.equal(who5Band(50), 'reduced');
  assert.equal(who5Band(51), 'normal');
});

test('rejects bad input', () => {
  assert.throws(() => who5Score([1, 2, 3]));
  assert.throws(() => who5Score([1, 2, 3, 4, 6]));
  assert.throws(() => who5Score([1, 2, 3, 4, 1.5]));
});
