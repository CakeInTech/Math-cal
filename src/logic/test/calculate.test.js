import calculate from '../calculate';

describe('It should calculate', () => {
  it('should return an object', () => {
    const result = calculate({ total: null, next: null, operation: null }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it(' tests "+" button', () => {
    const obj = {
      total: '10',
      next: '10',
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '20', next: null, operation: null });
  });
});
