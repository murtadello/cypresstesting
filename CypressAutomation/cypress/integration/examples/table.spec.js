describe('MyTestSuit', () => {
    it('Table', () => {

        cy.visit('http://testautomationpractice.blogspot.com/')

        // 1) check the value presense everywhere in the table
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        // 2) check value presense in specific row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
        
        




        
    

         
    })

    
  })