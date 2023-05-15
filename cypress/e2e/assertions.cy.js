// Assertions Demo

it('Assertions Demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    
    cy.get('#query-btn')
    // This asserts that the below item should contain the text "Button" -- It will show up green if it passes.
        .should('contain', "Button")
        // This asserts that the item should have a class name of query-btn. 
        .should('have.class', 'query-btn')
        // You can also check have.text, have.thml
        .should('be.visible')
        // .should('be.disabled')
        .should('be.enabled')
        // be.focused = have.focus are other options

        // Note that becuase these are all should assertions, we can change the additional ones to and:
        // .should('contain', "Button")
        // .and('have.class', 'query-btn')
        // .and('be.visible')
        // .and('be.enabled')


        expect(true).to.be.true

        // Third is the message to print if the test fails. (If the two aren't equal)
        // assert.equal(4, 5, "NOT EQUAL")
        assert.equal(4, '4', "NOT EQUAL")
        
        // This shows the error as strictEqual requires the type to be the same.
        assert.strictEqual(4, '4', "NOT EQUAL" )

})