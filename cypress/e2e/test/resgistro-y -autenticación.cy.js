import { CommomPageData } from "../pages/commom-page/commom-page.data";
import { CommomPageMethods } from "../pages/commom-page/commom-page.methods";
import { SignupMethods } from "../pages/singup/signup.methods";
import { Logger } from "../util/logger";

describe(CommomPageData.testSuites.registroYAutenticacion, ()=> {
    it("registro de usuario válido", ()=> {
        Logger.stepNumber(1)
        Logger.step('Navegar a la p[agina de inicio')
        CommomPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sign up" en la barra de navegacion')
        CommomPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con infotmación valida')
        SignupMethods.insertUsername('bvbvn');
        SignupMethods.insertPassword('bvbvn');

        Logger.stepNumber(4)
        Logger.step('Hacer clic en el boton Sign up')
        SignupMethods.clickOnSignupButton;
        
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful"')
        SignupMethods.verifySignupSeccesfulMessageDisplay();

    });
});