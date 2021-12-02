import { Component } from 'appable';

import template from './print.component.html';

import { CertificationListComponent } from './certification-list/certification-list.component';
import { EducationListComponent } from './education-list/education-list.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { IdentityComponent } from './identity/identity.component';
import { LinkListComponent } from './link-list/link-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillListComponent } from './skill-list/skill-list.component';

export class PrintComponent extends Component {

    constructor() {
        super('print', template, [
            new IdentityComponent(),
            new ProfileComponent(),
            new SkillListComponent(),
            new LinkListComponent(),
            new ExperienceListComponent(),
            new CertificationListComponent(),
            new EducationListComponent(),
        ]);
    }

}
