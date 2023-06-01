import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/main.page.js';
import MainNav from '../pageobjects/main.nav.js';
import BlogPage from '../pageobjects/blog.page.js';

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the main page$/, async () => {
    await MainPage.open()
});

When(/^I click the nav bar page (\w+)$/, async (page) => {
    await MainNav.navMenu_click(page)
});

When(/^I click the footer logo$/, async () => {
    await BlogPage.footerLogo_click()
});

Then(/^I should see the hero message saying (.*)$/, async (message) => {
    await expect(MainPage.hero).toBeExisting();
    await expect(MainPage.hero).toHaveTextContaining(message);
});

Then(/^I should see the blog hero message saying (.*)$/, async (message) => {
    await expect(BlogPage.blogHeading).toBeExisting();
    await expect(BlogPage.blogHeading).toHaveTextContaining(message);
});