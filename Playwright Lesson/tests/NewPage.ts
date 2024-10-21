import { Page, Locator, expect } from '@playwright/test'


// TODO: Here is an example of a page object
export class NewPage {
    readonly page: Page;
    readonly myLocatorById: Locator;
    readonly myLocatorByClass: Locator;
    readonly myLocatorByTestId: Locator;
    readonly myLocatorByXpath: Locator;
    readonly myLocatorByText: Locator;
    readonly myLocatorByRole: Locator;
    readonly myLocatorByLabel: Locator;

    // TODO: Define your locators attribute here
    constructor(page: Page) {
        this.page = page;
        this.myLocatorById = page.locator('//*[@id="myId"]');
        this.myLocatorByClass = page.locator('//*[@class="myClass"]');
        this.myLocatorByTestId = page.getByTestId('myTestId'); // Type of testId is defined in the page
        this.myLocatorByXpath = page.locator('//*[@xpath="myXpath"]');
        this.myLocatorByText = page.getByText('Hello World');
        this.myLocatorByRole = page.getByRole('button');
        this.myLocatorByLabel = page.getByLabel('Firstname');


    }

    async doSomethingElse() {
        await this.myLocatorById.click();
        await expect(this.myLocatorById).toBeVisible();
        await this.myLocatorByClass.click();
        await this.myLocatorByLabel.click();
        await this.myLocatorByRole.fill("Je refuserai de me soumettre");
        await this.myLocatorByText.click();
        
    }
}


