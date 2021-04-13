describe('SUIT Element', () => {
    it('Navigation', () => {

        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq','nopCommerce demo store')// verify the title of the page Home Page

        cy.get('.ico-register').contains('Reg').click()

        cy.title().should('eq','nopCommerce demo store. Register')// verfiy the title of the page Reg page


        cy.go('back')
        cy.title().should('eq','nopCommerce demo store') // Home page

        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register') //Reg page

        cy.go(-1)//back
        cy.title().should('eq','nopCommerce demo store')

        cy.go(1) // forward
        cy.title().should('eq','nopCommerce demo store. Register')


        cy.reload()

        









         
    })

    
  })