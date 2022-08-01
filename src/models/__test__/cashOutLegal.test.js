import { cashOutLegal } from '../cashOutLegal.js';

const data = {
    date: '2016-01-07',
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: { amount: 2000, currency: 'EUR' },
};

const option = {
    percents: 0.3,
    min: {
        amount: 0.5,
        currency: 'EUR',
    },
};

describe('Test cashOutLegal function', () => {
    test('cashOutLegal', () => {
        const commissionFee = cashOutLegal(data, option);
        expect(commissionFee).toEqual(6);
    });
});
