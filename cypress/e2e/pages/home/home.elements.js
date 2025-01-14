export class HomeElements{
    static get categoriesMenu(){
        return{
            get phones(){
               return cy.contains('a', 'Phones')
            },
            get laptops(){
                return cy.contains('a', 'Laptops')
            },
            get monitord(){
                return cy.contains('a', 'Monitors')
            }
        };
    }
    static product(producName){
        return cy.contains('a',producName, {timeout:30000});
    }
}