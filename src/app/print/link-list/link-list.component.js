import { Component } from 'appable';

import template from './link-list.component.html';

import { PrintService } from '../print.service';

export class LinkListComponent extends Component {

    yaml = PrintService.get('link-list');

    constructor() {
        super('app-link-list', template);
    }

}
