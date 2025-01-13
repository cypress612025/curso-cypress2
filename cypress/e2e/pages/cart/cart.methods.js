import { CartElements } from "./cart.elements";

export class CartMethods{
    static clicOnDeleteLink(producName){
        CartElements.links.delete(producName).click();
    }
}