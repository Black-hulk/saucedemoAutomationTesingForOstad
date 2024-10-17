export class GetItemNameAndPrice{
    get item1Name(){
        return $("//a[@id='item_4_title_link']//div");
    }

    get item2Name(){
        return $("//a[@id='item_0_title_link']//div");
    }

    get item3Name(){
        return $("//a[@id='item_1_title_link']//div");
    }
}