import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class ThankYouForYouPurchaseMethods{
    static clickOnOKButton(){
        ThankYouForYouPurchaseElements.buttons.ok.click();
    }
    static verifygreenCheckMark(){
        ThankYouForYouPurchaseElements.icons.greenCheckMark.should("exist");
    }
}