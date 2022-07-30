import { getWeekNumberAndYear } from '../services/getWeekNumberAndYear.js';

/**
 * calculate commission, cashOut for the natural person
 * Returns commissionFee.
 * @param {Object} data
 * @param {Object} data.date
 * @param {Object} data.user_id
 * @param {Object} data.operation
 * @param {number} data.operation.amount - The amount of a operation.
 * @param {Object} configNatural - configuration
 * @param {number} configNatural.percents
 * @param {Object} configNatural.week_limit
 * @param {Object} state
 */

export const cashOutNatural = (data, configNatural, state) => {
    const {
        user_id,
        operation: { amount },
        date,
    } = data;

    const { percents, week_limit } = configNatural;
    let commissionFee;

    const numberWeek = getWeekNumberAndYear(new Date(date));
    const historyAmount = state?.[user_id]?.history?.[numberWeek]?.amount || 0;
    let normalCommissionFee;
    if (historyAmount <= week_limit.amount && amount <= week_limit.amount) {
        commissionFee = 0;
    } else if (
        historyAmount <= week_limit.amount &&
        amount > week_limit.amount
    ) {
        normalCommissionFee = ((amount - week_limit.amount) * percents) / 100;
        commissionFee = normalCommissionFee;
    } else {
        normalCommissionFee = (amount * percents) / 100;
        commissionFee = normalCommissionFee;
    }

    const newState = {
        ...state,
        [user_id]: {
            user_id,
            history: {
                ...state[user_id]?.history,
                [numberWeek]: {
                    amount:
                        amount +
                        (state[user_id]?.history?.[numberWeek]?.amount || 0),
                    numberWeek,
                },
            },
        },
    };

    return { commissionFeeForNatural: commissionFee, newState };
};
