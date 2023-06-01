import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainNav extends Page {
    /**
     * define selectors using getter methods
     */

    public get navAbout () {
        return $('nav.main-nav.w-nav-menu > a:nth-child(1)');
    }

    public get navCareers () {
        return $('nav.main-nav.w-nav-menu > a:nth-child(2)');
    }

    public get navBlog () {
        return $('nav.main-nav.w-nav-menu > a:nth-child(3)');
    }

    public get navSupport () {
        return $('nav.main-nav.w-nav-menu > a:nth-child(4)');
    }

    public async navMenu_click (page: string) {
        switch(page){
            case 'About':{
                await this.navAbout.click();
                break;
            }
            case 'Careers':{
                await this.navCareers.click();
                break;
            }
            case 'Blog':{
                await this.navBlog.click();
                break;
            }
            case 'Support':{
                await this.navSupport.click();
                break;
            }
            default:{
                throw new Error('Unknown page '+page)
            }
        }
        
    }
}

export default new MainNav();
