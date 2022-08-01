import { cashOutNatural } from '../cashOutNatural.js';

const data = {
    date: '2016-01-07',
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: { amount: 2000, currency: 'EUR' },
};

const option = {
    percents: 0.3,
    week_limit: {
        amount: 1000,
        currency: 'EUR',
    },
};

describe('Test cashOutNatural function', () => {
    test('cashOutNatural', () => {
        const commissionFee = cashOutNatural(data, option, {});

        expect(commissionFee).toHaveProperty('commissionFeeForNatural');
        expect(commissionFee).toHaveProperty('newState');

        expect(commissionFee).toMatchObject({ commissionFeeForNatural: 3 });
        expect(commissionFee).toMatchObject({
            newState: {
                1: {
                    user_id: 1,
                    history: {
                        '2016,1': { amount: 2000, numberWeek: [2016, 1] },
                    },
                },
            },
        });
    });
});
