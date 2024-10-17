import { ManuObject } from "./manuObject";

const manuObject=new ManuObject();

export default class ManuAction{
    async clickOnManuIcon(){
        await manuObject.clickOnHamburgmanu.click();
    };
    
    async clickresetAppState(){
        await manuObject.resetAppState.click();
    };

    async closeManu(){
        await manuObject.closeManu.click();
    }

    async logout(){
        
    }

    async resetapp(){
        await this.clickOnManuIcon();
        await this.clickresetAppState();
        await browser.pause();
        await this.closeManu();
        await browser.pause(2000);
    }
}