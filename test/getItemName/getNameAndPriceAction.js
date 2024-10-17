import { GetItemNameAndPrice } from "./getNameAndPrice";

const getItemNameAndPrice=new GetItemNameAndPrice();

export default class GetItemNameAndPriceAction{
    async getItem1Name(){
       const itemOneName= await getItemNameAndPrice.item1Name.getText();
       return itemOneName;
    }

    async getItem2Name(){
        const itemOneName= await getItemNameAndPrice.item2Name.getText();
        return itemOneName;
    }

    async getItem3Name(){
        const itemOneName= await getItemNameAndPrice.item3Name.getText();
        return itemOneName;
    }

    async getItemName(){
        await this.getItem1Name();
        await this.getItem2Name();
        await this.getItem3Name();

    }

}
