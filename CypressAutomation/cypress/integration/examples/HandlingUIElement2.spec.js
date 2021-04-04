

describe('UI Elements', () => {

    it('Hobbies and check boxes', () => {
      cy.visit("http://demo.automationtesting.in/Register.html") //visit url

      cy.get("#checkbox1").check().should('be.checked').and('have.value', 'Cricket') // check the first checkbox
      cy.get("#checkbox2").check().should('be.checked').and('have.value', 'Movies') //check the second checkbox
      cy.get("#checkbox3").check().should('be.checked').and('have.value', 'Hockey') // check the third checkbox


      cy.get("#checkbox1").uncheck().should('not.be.checked') // uncheck the first checkbox
      cy.get("#checkbox2").uncheck().should('not.be.checked') //uncheck the second checkbox
      cy.get("#checkbox3").uncheck().should('not.be.checked') //uncheck the third checkbox

      cy.get('input[type="checkbox"]').check(['Cricket','Hockey','Movies'])
      
      



    }
    )

    it('Skill Drop down', function(){
        cy.get('#Skills').select('Android').should('have.value', 'Android')

    } 
    )

    it('Language Multiselect', function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()


    } 
    )

    it('select Countries searchable drop down', function(){
        cy.get('[role=combobox]').click({force: true})
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')
    



    } 
    )

    

}
)