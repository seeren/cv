import { Component } from 'appable';

import template from './education-list.component.html';

import { PrintService } from '../print.service';

export class EducationListComponent extends Component {

    yaml = PrintService.get('education-list');

    constructor() {
        super('app-education-list', template);
    }

}
