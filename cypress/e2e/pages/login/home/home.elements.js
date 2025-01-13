export class HomeElements{
    static get categoriesMenu(){
        return{
            get phones(){
                cy.contains('a', 'Phones')
            },
            get laptops(){
                cy.contains('a', 'Laptops')
            },
            get monitord(){
                cy.contains('a', 'Monitors')
            }
        };
    }
    static product(producName){
        return cy.contains('a',producName)
    }
}