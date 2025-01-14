import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnPhoneOption(){
        HomeElements.categoriesMenu.phones.click();
    }
    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click();
    }
    static clickOnMonitorOption(){
        HomeElements.categoriesMenu.monitord.click();
    }
    static clickOnProductLink(productName){
        HomeElements.product(productName).click();
    }
    static verifyproductDispayed(producName){
        HomeElements.product(producName).should('be.visible')

    }
    
}