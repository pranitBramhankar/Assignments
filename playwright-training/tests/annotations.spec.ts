import {test} from '@playwright/test';

test.describe('Form Filling',()=>{
    test('Launch Browser',({page})=>{
        page.goto('https://testautomationpractice.blogspot.com/');
    })
})