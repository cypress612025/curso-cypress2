import { Logger } from "../../util/logger";
import { CommomPageMethods } from "../commom-page/commom-page.methods";
import { loginElements } from "./login.elements";

export class LoginMethods{
    static inserUsername(username){
        loginElements.textboxes.username.invoke('val', username)

    }
    static insertPassword(password){
        loginElements.textboxes.password.invoke('val', password)
    }
    static clickOnLoginButoon(){
        loginElements.bottons.login.click()
    }
    static login(username, password){
        Logger.subStep('insert username')
        this.inserUsername(username)
        Logger.subStep('insert password')
        this.insertPassword(password)
        Logger.subStep('Click on login button')
        this.clickOnLiginButoon()
    }
    static verifayWrongPasswordMessage(){
        CommomPageMethods.verifyAlert('Wrong password')
    }
}