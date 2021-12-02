import { Service } from 'appable';

import YAML from 'yaml';

import file from './print.yaml';

export const PrintService = new class extends Service {

    #yaml = YAML.parse(file);

    get(property) {
        if (!(property in this.#yaml)) {
            throw new Error(`Property "${property} do not exists on "print.yaml" file"`);
        }
        return this.#yaml[property];
    }

}();
