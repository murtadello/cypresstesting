

describe('UI Elements', () => {

    it('Verify Inputbox and Radio Buttons', () => {
      cy.visit("https://powercoders.org/") //visit url

      cy.url().should('include', 'powercoders') // verify url should inclue powercoders

      cy.get("#nav-mobile > li:nth-child(1) > a").click()

      cy.get(":nth-child(9) > .btn").click() // open the registration form
      



    })

    
  })