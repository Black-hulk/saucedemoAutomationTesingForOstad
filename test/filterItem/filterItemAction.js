import { FilterandAddItemObjects } from "./filterItemobject";

const filterandAddItemObjects=new FilterandAddItemObjects();

export default class FilterandAddItemAction{
    async clickFilterIcon(){
        await filterandAddItemObjects.filterIcon.click();
    }
    async selectOption(){
        await filterandAddItemObjects.selectFilterOption.click();
    }
    async additem(){
        await filterandAddItemObjects.addFirstItem.click();
    }
    async filterAndAdd(){
        await this.clickFilterIcon();
        await this.selectOption();
        await this.additem();
    }
}