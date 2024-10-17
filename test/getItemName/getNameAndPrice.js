export class GetItemNameAndPrice{
    get item1Name(){
        return $("//a[@id='item_4_title_link']//div");
    };

    get item2Name(){
        return $("//a[@id='item_0_title_link']//div");
    };

    get item3Name(){
        return $("//a[@id='item_1_title_link']//div");
    };
    get firstItemByFilter(){
        return $("//a[@id='item_3_title_link']//div");
    };
    // get firstItemPriceByFilter(){
    //     return $("//button[@id='remove-test.allthethings()-t-shirt-(red)']/preceding-sibling::div");
    // };
}