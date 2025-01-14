import { CommomPageData } from "./commom-page.data";
import { CommomPageElements } from "./commom-page.elements";

export class CommomPageMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommomPageData.url);
    }
    static clickOnHomeOption(){
        CommomPageElements.topMenu.home.click();
    }
    static clickOnContactOption(){
        CommomPageElements.topMenu.contac.click();
    }
    static clickOnAboutUSOption(){
        CommomPageElements.topMenu.aboutUs.click();
    }
    static clickOnCartOption(){
        CommomPageMethods.topMenu.cart.click();
    }
    static clickOnLogInOption(){
        CommomPageElements.topMenu.logIn.click();
    
    }
    static clickOnSignUpOption(){
        CommomPageElements.topMenu.signUp.click();
    }
    static verifyAlert(expecdMessage){
        cy.on('window: alert', (str)=>{
            expect(str).to.equal(expecdMessage)
        })
    }
}