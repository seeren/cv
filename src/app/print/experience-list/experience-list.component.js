import { Component } from 'appable';

import template from './experience-list.component.html';

import { PrintService } from '../print.service';

export class ExperienceListComponent extends Component {

    yaml = PrintService.get('experience-list');

    constructor() {
        super('app-experience-list', template);
    }

}
