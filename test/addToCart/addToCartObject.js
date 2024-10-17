export class AddToCartItems{
    
    get item1(){
        return $("//button[@id='add-to-cart-sauce-labs-backpack']");
    };

    get item2(){
        return $("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']");
    };

    get item3(){
        return $("//button[@id='add-to-cart-sauce-labs-bike-light']");
    };

    get cartbutton(){
        return $("//div[@id='shopping_cart_container']//a");
    }

    get clickOnCheckout(){
        return $("//button[@id='checkout']");
    }
}