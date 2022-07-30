import fetch from 'node-fetch';

export class FatchClient {
    instance;
    constructor() {
        this.instance = fetch;
    }

    execute(requestConfig) {
        return this.instance(requestConfig.url, { ...requestConfig })
            .then((response) => response.json())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                console.log('Error:', error);
                return error;
            });
    }
}
