import { GetItemNameAndPrice } from "./getNameAndPrice";

const getItemNameAndPrice=new GetItemNameAndPrice();

export default class GetItemNameAndPriceAction{
    async getItem1Name(){
       const itemOneName= await getItemNameAndPrice.item1Name.getText();
       return itemOneName;
    };

    async getItem2Name(){
        const itemOneName= await getItemNameAndPrice.item2Name.getText();
        return itemOneName;
    };

    async getItem3Name(){
        const itemOneName= await getItemNameAndPrice.item3Name.getText();
        return itemOneName;
    };

    async getItemName(){
        await this.getItem1Name();
        await this.getItem2Name();
        await this.getItem3Name();

    };
    async ItemNameByFilter(){
        const name=await getItemNameAndPrice.firstItemByFilter.getText();
        return name;
    };

    async ItemPriceForFilterItem(){
        const price= await getItemNameAndPrice.firstItemPriceByFilter.getText();
        const match= price.match(/\$(\d+\.\d{2})/);
        const priceText= match ? match[1] : null;
        // const parts = totalpricetext.split('"');
        // const result = parts[3];
        const priceInNumber=parseFloat(priceText);
        return priceInNumber;
    }
}
