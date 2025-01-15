import { CommomPageData } from "../pages/commom-page/commom-page.data";
import { CommomPageMethods } from "../pages/commom-page/commom-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommomPageData.testSuites.autenticacion, ()=> {
    it('Inicio de sesion valido', ()=>{
        Logger.stepNumber(1)
        Logger.step('navegar a la pagina de inicio')
        CommomPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "log in" en la barra de navegacion')
        CommomPageMethods.clickOnLogInOption()

        Logger.stepNumber(3)
        Logger.step('Ingresar nombre de usuario y contreseña validos')
        LoginMethods.inserUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Log in" para iniciar sesion')
        LoginMethods.clickOnLoginButoon();
        Logger.verification('verificar que se redirije al usuario a la pagina de inicio')
        CommomPageMethods.verifySignedUser(LoginData.validCredentials.username);
        cy.wait(10000)

        Logger.posCondition('Log out')
        CommomPageMethods.logout();
        cy.wait(10000)
    });

    xit('Inicio de sesion invalido', ()=>{
        Logger.stepNumber(1)
        Logger.step('navegar a la pagina de inicio')
        CommomPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "log in" en la barra de navegacion')
        CommomPageMethods.clickOnLogInOption()

        Logger.stepNumber(3)
        Logger.step('Ingresar nombre de usuario y/o contreseña invalidos')
        LoginMethods.inserUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword('contraseñaivalida');

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Log in" para iniciar sesion')
        LoginMethods.clickOnLoginButoon();
        Logger.verification('verificar que se muestra mensaje de error indicando que el inicio de sesion a fallado')
        LoginMethods.verifayWrongPasswordMessage();

    });
});