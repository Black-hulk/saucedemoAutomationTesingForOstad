import LoginErrorAction from "../loginErrorTest/loginErrorAction";

const loginErrorAction=new LoginErrorAction

const massage='Epic sadface: Sorry, this user has been locked out.'
describe("Saucedemo Site Testing", ()=>{
    it("Should login", async ()=>{
        // const expectedMassage=massage;
        // const actualmassage= await loginErrorAction.getErrorMassage();
        
        await loginErrorAction.verifyErrorMassage();
        // expect(expectedMassage).toEqual(actualmassage);
    });
    it("Should Get error massage is Epic sadface: Sorry, this user has been locked out.", async()=>{
        const expectedMassage=massage;
        const actualmassage= await loginErrorAction.getErrorMassage();
        
        await loginErrorAction.verifyErrorMassagecheck();
        expect(expectedMassage).toEqual(actualmassage);
    })

});