it('My 1st Test', ()=>{
    cy.log('Login 1st Test Starts')
    cy.visit('https://trytestingthis.netlify.app')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    cy.log('Login 1st Test Ends')
})