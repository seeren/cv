import { Component } from 'appable';

import template from './identity.component.html';

import { PrintService } from '../print.service';

export class IdentityComponent extends Component {

    yaml = PrintService.get('identity');

    constructor() {
        super('app-identity', template);
    }

}
