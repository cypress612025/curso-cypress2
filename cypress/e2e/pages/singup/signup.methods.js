import { CommomPageMethods } from "../commom-page/commom-page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke('val',username)
    }
    static insertPassword(password){
        SignupElements.textboxes.password.invoke('val',password)
    }
    static clickOnSignupButton(){
        SignupElements.buttons.signup.click();
    }
    static signup(username, password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignup();
    }
    static verifySignupSeccesfulMessageDisplayed(){
        CommomPageMethods.verifyAlert("Sign up successful");
    }
    static verifyThatThisUserAlreadyExistsMessageIsDispalayed(){
        CommomPageMethods.verifyAlert('This user already exist.');
    }
}