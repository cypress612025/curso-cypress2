import { CartMethods } from "../pages/cart/cart.methods";
import { CommomPageData } from "../pages/commom-page/commom-page.data";
import { CommomPageMethods } from "../pages/commom-page/commom-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { Logger } from "../util/logger";

const user= LoginData.validCredentials;
const product= 'ASUS Full HD'

describe(CommomPageData.testSuites.catalogoYCompra, ()=>{
    it('Navegacion por Categoria', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesion como un usuario registrado')
        Logger.subStep('Navegar a la aplicacion')
        CommomPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click On "Login" Linck')
        CommomPageMethods.clickOnLogInOption();
        LoginMethods.login(user.username,user.password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de Inicio')
        CommomPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de producto en el menu de navegacion')
        HomeMethods.clickOnMonitorOption();
        Logger.verification('verificar que se muestre la lista de productos correspondiente a la categoria seleccionada')
        HomeMethods.verifyproductDispayed('Apple monitor 24')
        HomeMethods.verifyproductDispayed('ASUS Full HD')
    })

    it('Agregar productos al carrito', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesion como un usuario registrado')
        Logger.subStep('Navegar a la aplicacion')
        CommomPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click On "Login" Linck')
        CommomPageMethods.clickOnLogInOption();
        LoginMethods.login(user.username,user.password);

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de Inicio')
        CommomPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoria de producto en el menu de navegacion')
        HomeMethods.clickOnMonitorOption();
       

        Logger.stepNumber(4)
        Logger.step('Hacer clic en unproducto')
        HomeMethods.clickOnProductLink(product)
        
        Logger.stepNumber(5)
        Logger.verification('verificar que se muestre la pagina de detalles del producto')
        ProductDetailsMethods.verifyProducDetailsPageDesplayed();
        
        Logger.stepNumber(6)
        Logger.step('Hacer clic en Add to cart')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se encuentra mensaje de confirmacion y el producto se agrega al carrito')
        //Product added.
        ProductDetailsMethods.veriProductAddedMessege();
        CommomPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

    })
})