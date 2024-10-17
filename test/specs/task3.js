import AddToCartItemAction from "../addToCart/addToCartAction";
import CheckoutAction from "../checkout/chackoutAction";
import CheckoutOverviewAction from "../crossCheckItemInfo/itemInfoCheckAction";
import FilterandAddItemAction from "../filterItem/filterItemAction";
import GetItemNameAndPriceAction from "../getItemName/getNameAndPriceAction";
import LoginWithValidAction from "../loginWithVlid/loginwithValidAction";
import ManuAction from "../manu/manuAction";
import FinishMsgAction from "../verifyFinishMsg.js/finishMsgAction";


const loginWithValidAction=new LoginWithValidAction();
const manuAction=new ManuAction();
const addToCartAction=new AddToCartItemAction();
const checkoutOverviewAction=new CheckoutOverviewAction();
const getItemNameAndPriceAction=new GetItemNameAndPriceAction();
const checkoutAction= new CheckoutAction();
const finishMsgAction=new FinishMsgAction();
const filterandAddItemAction=new FilterandAddItemAction();

const massage="Thank you for your order!";
const price=15.99;

describe("Verify with user performance_glitch_user",()=>{
    it("Shuld loging with user",async()=>{
        await loginWithValidAction.enterUsername2();
        await loginWithValidAction.enterPassword();
        await loginWithValidAction.clickLoginButton();
    });
    it("Shuld reset the app ",async()=>{
        await manuAction.resetapp();
    });
    it("Should Filter and add first Item",async()=>{
        //await getItemNameAndPriceAction.ItemPriceForFilterItem();
        await getItemNameAndPriceAction.ItemNameByFilter();
        await filterandAddItemAction.filterAndAdd();
        
    });
    it("Should Click add to cart icon and checkout",async ()=>{
        await addToCartAction.clickCartButton();
        await addToCartAction.ItemPriceForFilterItem();
        await addToCartAction.clickCheckoutButton();
        await browser.pause(5000);
    });
    it("Should fillup checkout information",async()=>{
        await checkoutAction.finishCheckout();
        //await checkoutOverviewAction.filterItemNameFromCart();
    });
    it("Verify Cart item name and price",async()=>{
        const expectediItemNameForFilter= await checkoutOverviewAction.filterItemNameFromCart();
        const totalPrice=await checkoutOverviewAction.getTotalPrice();

        const actualItemName=await getItemNameAndPriceAction.ItemNameByFilter();
        const actualItemPrice=price;

        expect(actualItemName).toEqual(expectediItemNameForFilter);
        expect(actualItemPrice).toEqual(totalPrice);
    });
    it("Should match Finishing massage",async()=>{
        await finishMsgAction.clickOnFinishButton();
        const expectedMsg= await finishMsgAction.finishingMsg();
        expect(expectedMsg).toEqual(massage);
    });
    it("Reset app And Logout", async()=>{
        await manuAction.clickOnManuIcon();
        await manuAction.clickresetAppState();
        await manuAction.logout();
    });

})