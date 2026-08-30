import { formatCurrency } from '../../scripts/utils/money.js';

describe('Test suite: formatCurrency', () => {// Used for test-suite in jasmine
  it('converts cents into dollars', () => {// It creates a test.
    expect(formatCurrency(2095)).toEqual('20.95');// It lets us compare a value to another value.
    // .toEqual() is an object which helps compare the value.
  });

  it('Works with zero', ()=>{
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Round up to nearest cent', ()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
}); 