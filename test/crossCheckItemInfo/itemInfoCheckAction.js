import { CheckoutOverviewInfo } from "./itemInfoCheckobject";

const checkoutOverviewInfo=new CheckoutOverviewInfo();

export default class CheckoutOverviewAction{
    async getItemName1(){
       const checkoutItem1= await checkoutOverviewInfo.itemOneName.getText();
       return checkoutItem1;
    }
    async getItemName2(){
        const checkoutItem2= await checkoutOverviewInfo.itemTwoName.getText();
        return checkoutItem2;
    }
    async getItemName3(){
        const checkoutItem3= await checkoutOverviewInfo.itemThreeName.getText();
        return checkoutItem3;
    }

    async getTotalPrice(){
        const totalpricetext= await checkoutOverviewInfo.totalPrice.getText();
        const match= totalpricetext.match(/\$(\d+\.\d{2})/);
        const priceText= match ? match[1] : null;
        const checkoutTotalPrice=parseFloat(priceText);
        return checkoutTotalPrice;
    }

    async checkoutInfo(){
        await this.getItemName1();
        await this.getItemName2();
        await this.getItemName3();
        await this.getTotalPrice();
        await browser.pause(2000);
    }

    async filterItemNameFromCart(){
        const checkoutItemForFilter= await checkoutOverviewInfo.filterItemNameFromCart.getText();
        return checkoutItemForFilter;
    }
    
}