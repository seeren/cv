import { Component } from 'appable';

import template from './skill-list.component.html';

import { PrintService } from '../print.service';

export class SkillListComponent extends Component {

    yaml = PrintService.get('skill-list');

    constructor() {
        super('app-skill-list', template);
    }

}
