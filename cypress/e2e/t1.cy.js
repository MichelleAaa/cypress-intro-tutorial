// At the top you used to have to mention:
/// ＜reference types="cypress" /＞
// But now it's in the cypress.config.js file.
// To write a test we need a test runner. mocha comes built-in with cypress.
//We use the it block to write a test function.


// One Format:
// it('Google Search', function(){
//     cypress.visit('https://google.com')
// })

//Another format:
it('Google Search', () => {
    cy.visit('https://google.com')
    // The type command is for you to type into things like input boxes. In this case the google search box.
    // note that # is to say that it's an id. These are selectors.
    // Timeout listed in the test file overrides a timeout that's listed in the cypress.config.js file.

    // Adding {Enter will simulate the Enter press on the keyboard.}
    cy.get('#APjFqb', {timeout:5000}).type('Automation Step by Step{Enter}')

    // This is another way to cause a delay, just adding a wait statement with miliseconds listed.
    cy.wait(2000)
    
    // Here we are selecting the button that contains the term Google Search, and then clicking it.
    // cy.contains('Google Search').click()

    // This clicks on the Videos link tab at the top of the results page.
    cy.contains('Videos').click()
})