export class ManuObject{
    get clickOnHamburgmanu(){
        return $("//button[@id='react-burger-menu-btn']");
    }

    get resetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }

    get closeManu(){
        return $("//button[@id='react-burger-cross-btn']");
    }
}