import { BASE_URL } from './BaseUrl.js';

export class ApiServices {
    config = {
        method: 'GET',
        url: `${BASE_URL}/cash-in`,
    };

    cashIn() {
        this.config.url = `${BASE_URL}/cash-in`;
        return this;
    }

    cashOutLegal() {
        this.config.url = `${BASE_URL}/cash-out/natural`;
        return this;
    }

    cashOutNatural() {
        this.config.url = `${BASE_URL}/cash-out/juridical`;
        return this;
    }

    build() {
        return this.config;
    }
}
