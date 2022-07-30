import { ApiServices } from '../api/apiServices.js';
import { FatchClient } from '../api/fatchClient.js';

/**
 * get Configs
 * Returns { cashInConfig, cashOutNaturalConfig, cashOutLegalConfig }.
 */
export const getConfigs = async () => {
    const client = new FatchClient('');

    const makeRequestCashIn = new ApiServices().cashIn().build();
    const makeRequestCashOutNatural = new ApiServices()
        .cashOutLegal()
        .build();
    const makeRequestCashOutLegal = new ApiServices()
        .cashOutNatural()
        .build();

    const cashInConfig = await client.execute(makeRequestCashIn);
    const cashOutNaturalConfig = await client.execute(
        makeRequestCashOutNatural
    );
    const cashOutLegalConfig = await client.execute(makeRequestCashOutLegal);

    return { cashInConfig, cashOutNaturalConfig, cashOutLegalConfig };
};
