import { CartElements } from "./cart.elements";

export class CartMethods{
    static clicOnDeleteLink(producName){
        CartElements.links.delete(producName).click();
    }
    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeorder.click();
    }
    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')

    }
    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html#')
    }
}