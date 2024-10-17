export class FinishMsgObject{
    get finishButton(){
        return $("//button[@id='finish']");
    }
    get finishMsg(){
        return $("//div[@id='checkout_complete_container']//h2");
    }

    
}