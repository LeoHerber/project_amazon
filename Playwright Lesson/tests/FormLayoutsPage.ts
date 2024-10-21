import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class FormLayoutsPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly checkbox: Locator;
    readonly buttonSubmit : Locator;
    constructor (page: Page){
    this.page = page
    this.email = page.locator('#exampleInputEmail1' )
    this.password = page.locator('#exampleInputPassword1' )
    this.checkbox = page.getByRole ('checkbox' , {name: "Check me out" })
    this.buttonSubmit = page.locator('nb-card' ).filter({ hasText: 'Basic formEmail' }).getByRole ('button')
    }
    // async BasicForm () {
    //     await this.email.fill('test@test.com' );
    //     await this.password.fill('password' );
    //     await expect(this.email).toHaveValue ('test@test.com' )
    //     await this.checkbox.check({force: true});
    //     await this.buttonSubmit .click();
    // }
    async BasicForm () {
        const ramdomFullname = faker.person.fullName()
        const ramdomEmail = `${ramdomFullname .replace(' ','')}@test.com`
        // .replace(' ','') pour retirer espace
        const ramdomEmail2 = faker.internet.email() //donnée direct email
        await this.email.fill(ramdomEmail2);
        await this.password.fill('password');
        await this.checkbox.check({force: true});
        await this.buttonSubmit.click();
    }
}