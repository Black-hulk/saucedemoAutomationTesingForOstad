import { CheckoutObject } from "./checkoutObject";

const checkoutObject=new CheckoutObject();
const firstname="Nothing";
const lastname="Everything"
const zipCode= 1340;

export default class CheckoutAction{
    async inputFirstName(){
        await checkoutObject.checkoutFirstName.setValue(firstname);
    };

    async inputLastName(){
        await checkoutObject.checkoutLastName.setValue(lastname);
    };

    async inputZipCode(){
        await checkoutObject.checkoutZipCode.setValue(zipCode);
    };

    async clickConinueButton(){
        await checkoutObject.clickOnCheckoutContinue.click();
    };

    async finishCheckout(){
        await this.inputFirstName();
        await this.inputLastName();
        await this.inputZipCode();
        await this.clickConinueButton();
        await browser.pause(3000);
    };
    
}