export class CheckoutObject{
    get checkoutFirstName(){
        return $("//input[@id='first-name']");
    }
    
    get checkoutLastName(){
        return $("//input[@id='last-name']");
    }
    
    get checkoutZipCode(){
        return $("//input[@id='postal-code']");
    }

    get clickOnCheckoutContinue(){
        return $("//input[@id='continue']");
    }
}