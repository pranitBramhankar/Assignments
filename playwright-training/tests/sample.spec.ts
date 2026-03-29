import {test,expect} from '@playwright/test'

test('Launch Browser', async ({page})=>{
    await page.goto('https://www.google.com/');
    let pageTitle = await page.title;
    let expTiltle = 'Google';
    console.log(pageTitle);
    await expect(page).toHaveTitle(expTiltle);
});

test('Verify URL',async ({page})=>{
    await page.goto('https://www.google.com/');
    const expURL = 'https://www.google.com/';
    console.log(await page.url());
    await expect(page).toHaveURL(expURL);
});

