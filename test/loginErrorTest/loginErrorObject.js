export class LoginErrorObject{
    get usernameField(){
        return $("//input[@id='user-name']");
    };

    get passwordField(){
        return $("//input[@id='password']");
    };

    get loginButton(){
        return $("//input[@id='login-button']");
    };

    get errorMassage(){
        return $("//h3[@data-test='error']");
    };
}