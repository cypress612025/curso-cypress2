export class CommomPageElements{
    static get topMenu(){
         return{
            get home(){
                return cy.contains('a','Home');
            },
            get contac(){
                return cy.contains('a','Contact');
            },
            get aboutUs(){
                return cy.contains('a','About us');
            },
            get cart(){
                return cy.contains('a','Cart');
            },
            get logIn(){
                return cy.contains('a','Log in');
            },
            get signUp(){
                return cy.contains('a','Sign up');
            },
            get logOut(){
                return cy.contains('a', 'Log out')
            }
         };
    }
    static get signedUser (){
        return cy.get('a#nameofuser')
    }
}