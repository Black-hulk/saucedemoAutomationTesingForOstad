export class FilterandAddItemObjects{
    get filterIcon(){
        return $("//select[@class='product_sort_container']");
    }
    get selectFilterOption(){
        return $("//select[@class='product_sort_container']//option[contains(text(),'Name (Z to A)')]");
    }
    get addFirstItem(){
        return $("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']");
    }
}