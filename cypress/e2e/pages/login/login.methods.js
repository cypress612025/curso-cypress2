import { loginElements } from "./login.elements";

export class LoginMethods{
    static inserUsername(username){
        loginElements.textboxes.username.type(username)

    }
    static insertPassword(password){
        loginElements.textboxes.password.type(password)
    }
    static clickOnLiginButoon(){
        loginElements.bottons.login.click()
    }
    static login(username, password){
        this.inserUsername(username)
        this.insertPassword(password)
        this.clickOnLiginButoon()
    }
}