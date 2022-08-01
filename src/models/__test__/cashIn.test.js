import { calculateCashIn } from '../cashIn.js';

describe('Test calculateCashIn function', () => {
    test('cash in', () => {
        const data = { operation: { amount: 5000 } };
        const option = { config: { percents: 0.03, max: { amount: 5 } } };

        const result = calculateCashIn(data, option);

        expect(result).toEqual('1.50');
    });

    test('Calculate cash in with max commission', () => {
        const data = { operation: { amount: 5000 } };
        const option = { config: { percents: 0.03, max: { amount: 1 } } };

        const result = calculateCashIn(data, option);

        expect(result).toEqual('1.00');
    });
});
