/**
 * calculate commission, cashOut for the legal person
 * Returns commissionFee.
 * @param {Object} data
 * @param {Object} data.operation
 * @param {number} data.operation.amount - The amount of a operation.
 * @param {Object} configLegal - configuration
 * @param {number} configLegal.percents
 * @param {Object} configLegal.min
 */

export const cashOutLegal = (data, configLegal) => {
    const {
        operation: { amount },
    } = data;
    const { percents, min } = configLegal;

    let commissionFee;
    const normalCommissionFee = (amount * percents) / 100;

    if (normalCommissionFee < min.amount) {
        commissionFee = min.amount;
    } else {
        commissionFee = normalCommissionFee;
    }

    return commissionFee;
};
