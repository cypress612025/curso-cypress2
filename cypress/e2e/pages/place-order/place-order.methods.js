import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods{
   static insertName(name){
    PlaceOrderElements.textboxes.name.invake('val', name);
   }
   static insertCountry(country){
    PlaceOrderElements.textboxes.country.invake('val', country);
   }
   static insertCity(city){
    PlaceOrderElements.textboxes.city.invake('val', city);
   }
   static insertCrediCard(creditcar){
    PlaceOrderElements.textboxes.creditcar.invake('val', creditcar);
   }
   static insertMonth(month){
    PlaceOrderElements.textboxes.month.invake('val', month);
   }
   static insertYear(month){
    PlaceOrderElements.textboxes.year.invake('val', year);
   }
   static clickOnClosetButton(){
    PlaceOrderElements.buttons.closet.click();
   }
   static clickOnPurchaseButton(){
    PlaceOrderElements.buttons.purchase.click();
   }
} 