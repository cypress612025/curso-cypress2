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
        CommomPageElements.topMenu.cart.click();
    }
    static clickOnLogInOption(){
        CommomPageElements.topMenu.logIn.click();
    
    }
    static clickOnSignUpOption(){
        CommomPageElements.topMenu.signUp.click();
    }
    //metodo para verificar alertas de cypress
    static verifyAlert(expecdMessage){
        cy.on('window: alert', (str)=>{
            expect(str).to.equal(expecdMessage)
        })
    }
    static generateRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    static verifySignedUser(username){
        CommomPageElements.signedUser.should("have.text",`Welcome ${username}`)
    }
}