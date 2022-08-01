import { calculateCashOut } from '../cashOut.js';

const data = {
    date: '2016-01-07',
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: { amount: 2000, currency: 'EUR' },
};

const option = {
    configLegal: {
        percents: 0.3,
        min: {
            amount: 0.5,
            currency: 'EUR',
        },
    },
    configNatural: {
        percents: 0.3,
        week_limit: {
            amount: 1000,
            currency: 'EUR',
        },
    },
};

describe('Test calculateCashIn function', () => {
    test('cash in', () => {
        const commissionFee = calculateCashOut(data, option);

        expect(commissionFee).toEqual('3.00');
    });
});
