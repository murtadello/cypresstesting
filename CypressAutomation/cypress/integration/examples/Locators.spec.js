/// <reference type ="cypress">

describe('Locating Element', () => {
    it('Verify type of Locators', () => {
        cy.visit("https://demo.nopcommerce.com/") // open the url

        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")

        cy.get("[type='submit']").click() // click on the search button 

        cy.get(".product-box-add-to-cart-button").click()

        cy.get("#product_enteredQuantity_4").clear().type('2')

        cy.get("#add-to-cart-button-4").click() // click on add to cart button after providing the quantity

        cy.wait(5000)

        cy.get("#topcartlink > a > span.cart-label").click() //shopping cart click
        cy.wait(3000)

        cy.get(".product-unit-price").contains("$1,800.00") //validate point


        
    })

    
  })