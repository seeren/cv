import { RouterComponent } from 'appable';

import { AppComponent } from './app/app.component';
import { PrintComponent } from './app/print/print.component';

((main) => (window.cordova
    ? window.document.addEventListener('deviceready', main)
    : window.addEventListener('load', main))
)(() => RouterComponent
    .add('/', 'print', PrintComponent)
    .run(new AppComponent()));
