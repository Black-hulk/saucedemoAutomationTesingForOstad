export class CheckoutOverviewInfo{
    get itemOneName(){
        return $("//a[@id='item_4_title_link']//div");
    }
    get itemTwoName(){
        return $("//a[@id='item_0_title_link']//div");
    }
    get itemThreeName(){
        return $("//a[@id='item_1_title_link']//div");
    }
    get totalPrice(){
        return $("//div[@class='summary_subtotal_label']");
    }
}