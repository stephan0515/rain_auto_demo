import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class BlogPage extends Page {
    
    public get blogHeading () {
        return $('h1.main-blog--hedaing.blog-heading--black.blog-align');
    }

    public get footerLogo () {
        return $('a.footer-brand.w-inline-block');
    }

    public async footerLogo_click () {
        await this.footerLogo.click();
    }
}

export default new BlogPage();
