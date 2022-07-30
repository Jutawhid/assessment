import { cashOutLegal } from './cashOutLegal.js';
import { cashOutNatural } from './cashOutNatural.js';

/**
 * calculate commission for cashOut type, It is a closures function
 * Returns commissionFee.
 * @param {string} data.user_type - The type of a user.
 * @param {Object} options
 * @param {Object} options.configNatural - configuration
 * @param {Object} options.configLegal - configuration
 */

export const calculateCashOut = (function () {
    let state = {};

    return (data, options) => {
        const { user_type } = data;
        const { configLegal, configNatural } = options;

        let commissionFee = 0;

        if (user_type === 'natural') {
            const { commissionFeeForNatural, newState } = cashOutNatural(
                data,
                configNatural,
                state
            );
            commissionFee = commissionFeeForNatural;
            state = newState;
        } else if (user_type === 'juridical') {
            commissionFee = cashOutLegal(data, configLegal);
        }

        return commissionFee.toFixed(2);
    };
})();
