import operate from '../operate';

test('should take two numbers and operate it then return the results', () => {
  expect(operate(1, 2, '+')).toBe('3');
  expect(operate(1, 2, '-')).toBe('-1');
  expect(operate(1, 2, 'x')).toBe('2');
  expect(operate(9, 3, '÷')).toBe('3');
  expect(operate(1, 2, '%')).toBe('1');
});
