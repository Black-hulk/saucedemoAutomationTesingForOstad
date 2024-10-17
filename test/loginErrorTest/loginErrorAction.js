import { LoginErrorObject } from "./loginErrorObject";

const loginErrorObject=new LoginErrorObject();
var username='locked_out_user';
const password='secret_sauce';

export default class LoginErrorAction{
    async enterUsername(){
        await loginErrorObject.usernameField.setValue(username)
    };

    async enterPassword(){
        await loginErrorObject.passwordField.setValue(password);
    };

    async clickLoginButton(){
        await loginErrorObject.loginButton.click();
    };

    async getErrorMassage(){
        const getMassage= await loginErrorObject.errorMassage.getText();
        return getMassage;
    };

    async verifyErrorMassage(){
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLoginButton();
        await browser.pause(2000);
        // await this.getErrorMassage();
    };
    async verifyErrorMassagecheck(){
        await this.getErrorMassage();
    }
}

