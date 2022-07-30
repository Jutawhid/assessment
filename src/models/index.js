import { calculateCashIn } from './cashIn.js';
import { calculateCashOut } from './cashOut.js';
import { getConfigs } from './getConfigs.js';

/**
 * CommissionFees
 * Returns commissionFee as a list.
 * @param {Object} data - The data of operation
 * @param {string} data.date - The date of an operation.
 * @param {number} data.user_id - The id of a user.
 * @param {string} data.user_type - The type of the user.
 * @param {string} data.type - The type of an operation.
 * @param {Object} data.operation
 * @param {number} data.operation.amount - The amount of an operation.
 * @param {string} data.operation.currency - The currency of an operation.
 */

export const commissionFees = async (data) => {
    const { cashInConfig, cashOutNaturalConfig, cashOutLegalConfig } =
        await getConfigs();

    const commissionFeeList = [];
    for (let i = 0; i < data.length; i++) {
        const { type } = data[i];
        let commissionFee = 'Unknown';
        if (type === 'cash_out') {
            commissionFee = await calculateCashOut(data[i], {
                configLegal: cashOutLegalConfig,
                configNatural: cashOutNaturalConfig,
            });
        } else if (type === 'cash_in') {
            commissionFee = await calculateCashIn(data[i], {
                config: cashInConfig,
            });
        }
        commissionFeeList.push(commissionFee);
    }
    return commissionFeeList;
};
