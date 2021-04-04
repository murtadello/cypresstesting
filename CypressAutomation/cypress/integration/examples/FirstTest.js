describe('MyTestSuit', () => {
    it('Verify title of the page', () => {
      cy.visit("https://demo.nopcommerce.com/")
      cy.title().should("eq",'nopCommerce demo store')

    })

    it('Verify title of the page', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should("eq",'nopCommerce store')
        
      })
  })