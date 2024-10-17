import { LoginWithValidObject } from "./loginWithValidUser";

const loginWithValidObject=new LoginWithValidObject();

const username="standard_user";
const password="secret_sauce";

export default class LoginWithValidAction{
    async enterUsername(){
        await loginWithValidObject.usernameField.setValue(username)
    };

    async enterPassword(){
        await loginWithValidObject.passwordField.setValue(password);
    };

    async clickLoginButton(){
        await loginWithValidObject.loginButton.click();
    };

    async login(){
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLoginButton();
        await browser.pause(2000);
    }
}