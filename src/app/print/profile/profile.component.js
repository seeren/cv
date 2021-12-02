import { Component } from 'appable';

import template from './profile.component.html';

import { PrintService } from '../print.service';

export class ProfileComponent extends Component {

    yaml = PrintService.get('profile');

    constructor() {
        super('app-profile', template);
    }

}
