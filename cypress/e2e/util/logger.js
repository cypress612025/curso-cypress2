export class Logger{
    static stepNumber(number){
    const text= `Step # ${number}`
    cy.log(text)
    cy.allure().step(text)
    }
    static step(descrption){
        const text= `Step - ${descrption}`
        cy.log(text)
        cy.allure().step(text)
    }
    static verification(descrption){
        const text= `Verification - ${descrption}`
        cy.log(text)
        cy.allure().step(text)
    }
    static subStep(descrption){
        const text= `Substep - ${descrption}`
        cy.log(text)
        cy.allure().step(text)
    }
    static subVerification(descrption){
        const text= `SubVerification - ${descrption}`
        cy.log(text)
        cy.allure().step(text)
    }

}