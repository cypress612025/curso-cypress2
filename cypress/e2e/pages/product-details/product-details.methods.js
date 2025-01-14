import { CommomPageMethods } from "../commom-page/commom-page.methods";
import { ProductDetailsElements } from "./produvt-details.elements";

export class ProductDetailsMethods{
static clickOnAddToCartButton(){
    ProductDetailsElements.buttons.addToCart.click();
 }
 static verifyProducDetailsPageDesplayed(){
    ProductDetailsElements.buttons.addToCart.should('be.visible')
 }
 static veriProductAddedMessege(){
   CommomPageMethods.verifyAlert('Product added.')

 }
}