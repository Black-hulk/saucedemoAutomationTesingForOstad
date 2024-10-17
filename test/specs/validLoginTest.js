import AddToCartItemAction from "../addToCart/addToCartAction";
import CheckoutAction from "../checkout/chackoutAction";
import CheckoutOverviewAction from "../crossCheckItemInfo/itemInfoCheckAction";
//import { CheckoutOverviewInfo } from "../crossCheckItemInfo/itemInfoCheckobject";
import GetItemNameAndPriceAction from "../getItemName/getNameAndPriceAction";
import LoginWithValidAction from "../loginWithVlid/loginwithValidAction";
import ManuAction from "../manu/manuAction";

const loginWithValidAction=new LoginWithValidAction();
const manuAction=new ManuAction();
const addToCartAction=new AddToCartItemAction();
const checkoutOverviewAction=new CheckoutOverviewAction();
const getItemNameAndPriceAction=new GetItemNameAndPriceAction();
const checkoutAction= new CheckoutAction();

const item1=29.99;
const item2=9.99;
const item3=15.99;


describe("Saucedemo Site Login Testing", ()=>{
    it("Shuldbe loged in", async()=>{
        await loginWithValidAction.login();
    });
});

describe("Should Login and add product on cart",()=>{
    it("Should be clear all of things", async()=>{
        await manuAction.resetapp();
    });
    it("Should be add 3 Items",async()=>{
        await getItemNameAndPriceAction.getItemName();
        await addToCartAction.addItem();
    });

    it("Should Fill up Checkout Information", async ()=>{
        await checkoutAction.finishCheckout();
    });

    it("Verufy the product name and total price", async()=>{
        //await checkoutOverviewAction.checkoutInfo();
        const expectediItem1Name= await checkoutOverviewAction.getItemName1();
        const expectediItem2Name= await checkoutOverviewAction.getItemName2();
        const expectediItem3Name= await checkoutOverviewAction.getItemName3();
        const expectedTotalPrice= await checkoutOverviewAction.getTotalPrice();
        
        const actualNameOfItem1= await getItemNameAndPriceAction.getItem1Name();
        const actualNameOfItem2= await getItemNameAndPriceAction.getItem2Name();
        const actualNameOfItem3= await getItemNameAndPriceAction.getItem3Name();
        const actualTotalPrice= item1+item2+item3;

        expect(expectediItem1Name).toEqual(actualNameOfItem1);
        expect(expectediItem2Name).toEqual(actualNameOfItem2);
        expect(expectediItem3Name).toEqual(actualNameOfItem3);
        expect(expectedTotalPrice).toEqual(actualTotalPrice);


        


    });
})