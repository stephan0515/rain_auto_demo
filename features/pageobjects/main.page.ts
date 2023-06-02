import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class MainPage extends Page {

    public open () {
        return super.open('');
    }

    public get hero () {
        return $('h1.hero__h1');
    }
}

export default new MainPage();
