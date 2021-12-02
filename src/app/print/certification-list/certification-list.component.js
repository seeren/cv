import { Component } from 'appable';

import template from './certification-list.component.html';

import { PrintService } from '../print.service';

export class CertificationListComponent extends Component {

    yaml = PrintService.get('certification-list');

    constructor() {
        super('app-certification-list', template);
    }

}
