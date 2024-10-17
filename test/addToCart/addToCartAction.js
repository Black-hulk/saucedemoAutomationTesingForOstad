import { AddToCartItems } from "./addToCartObject";

const addToCartItems=new AddToCartItems();

export default class AddToCartItemAction{
    async addItem1(){
        await addToCartItems.item1.click();
    };

    async addItem2(){
        await addToCartItems.item2.click();
    };

    async addItem3(){
        await addToCartItems.item3.click();
    };

    async clickCartButton(){
        await addToCartItems.cartbutton.click();
    }

    async ItemPriceForFilterItem(){
        const price= await addToCartItems.firstItemPriceByFilter.getText();
        const match= price.match(/\$(\d+\.\d{2})/);
        const priceText= match ? match[1] : null;
        // const parts = totalpricetext.split('"');
        // const result = parts[3];
        const priceInNumber=parseFloat(priceText);
        return priceInNumber;
    }

    async clickCheckoutButton(){
        await addToCartItems.clickOnCheckout.click();
    }

    async addItem(){
        await this.addItem1();
        await this.addItem2();
        await this.addItem3();
        await browser.pause(2000);
        await this.clickCartButton();
        await browser.pause(2000);
        await this.clickCheckoutButton();
        await browser.pause(2000);

    }
}