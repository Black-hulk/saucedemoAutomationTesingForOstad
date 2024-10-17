import { FinishMsgObject } from "./finishingmsg";

const finishmMsgObject=new FinishMsgObject();

export default class FinishMsgAction{
    async clickOnFinishButton(){
        await finishmMsgObject.finishButton.click();
    };

    async finishingMsg(){
        const text= await finishmMsgObject.finishMsg.getText();
        return text;
    };

    // async finish(){
    //     await this.clickOnFinishButton();
    //     await this.finishingMsg();
    // };
}