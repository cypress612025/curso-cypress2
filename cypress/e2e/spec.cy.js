import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger";

describe('template spec', () => {
  it('passes', () => {
    const usuario ='pancho01';
    const contrasena ='pancho01'
    Logger.stepNumber(1)
    Logger.step('Navegar to DemoBlaze page')
    cy.visit('https://www.demoblaze.com/')

    Logger.stepNumber(2)
    Logger.step('Click on "Login" link')
    cy.get('a[data-target="#logInModal"]').click()
    
    Logger.stepNumber(3)
    Logger.step(`Login with this credetials: "${usuario}/${contrasena}"`)
    LoginMethods.login(usuario,contrasena)
    Logger.verification(`The home page show "welcome ${usuario}" text`)
    cy.get('a#nameofuser').should('contain', usuario)
    cy.wait(5000)
  })
})