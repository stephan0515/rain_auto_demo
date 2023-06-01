import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('');
    }

    /**
     * define selectors using getter methods
     */
    public get hero () {
        return $('h1.hero__h1');
    }
}

export default new MainPage();
