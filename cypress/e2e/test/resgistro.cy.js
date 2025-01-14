import { CommomPageData } from "../pages/commom-page/commom-page.data";
import { CommomPageMethods } from "../pages/commom-page/commom-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SignupMethods } from "../pages/singup/signup.methods";
import { Logger } from "../util/logger";

const user= CommomPageMethods.generateRandomString();
const pass= CommomPageMethods.generateRandomString(7);
const existinUser= LoginData.validCredentials.username;

describe(CommomPageData.testSuites.registro, ()=> {
    it("registro de usuario válido", ()=> {
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommomPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sign up" en la barra de navegacion')
        CommomPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con infotmación valida')
        SignupMethods.insertUsername(user);
        SignupMethods.insertPassword(pass);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en el boton Sign up')
        SignupMethods.clickOnSignupButton;
        
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful"')
        SignupMethods.verifySignupSeccesfulMessageDisplayed();

    });

    it("registro de usuario invalido", ()=> {
        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommomPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sign up" en la barra de navegacion')
        CommomPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con infotmación invalida')
        SignupMethods.insertUsername(existinUser);
        SignupMethods.insertPassword(pass);

        Logger.stepNumber(4)
        Logger.step('Hacer clic en el boton Sign up')
        SignupMethods.clickOnSignupButton;
        
        Logger.verification('Verificar que se muestre un mensaje de error ondicando los campos invalidos')
        SignupMethods.verifyThatThisUserAlreadyExistsMessageIsDispalayed();

    });
    
});

