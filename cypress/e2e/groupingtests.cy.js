import { LoginPage } from './pages/login_page'

const loginPage = new LoginPage()

// If you add a beforeEach in the describe block, this action will happen before each of the it() tests below.
// If it was outside the describe block, then then beforeEach would run for each block in the file.
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    })
// You could also add it in support files, like indes.js, or e2e.js (ver 10+) -- then it would run in every test in every spec file.

describe('All Login Tests', () => {

    // If you add a beforeEach in the describe block, this action will happen before each of the it() tests below.
    // If it was outside the describe block, then then beforeEach would run for each block in the file.
    // beforeEach(function(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com')
    // })

    it('Login Test 1', function(){

        // cy.visit('https://opensource-demo.orangehrmlive.com')
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    })

    // If you add .skip, this test will be skipped:
    it.skip('Login Test 1.5', function(){

        // cy.visit('https://opensource-demo.orangehrmlive.com')
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    })

    // If you add .only, then it will only run the it tests that list .only. (Aka the one above it will not be ran)
    it.only('Login Test 2', function(){

        // cy.visit('https://opensource-demo.orangehrmlive.com')
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    })
})


// This one wouldn't work without the beforeEach outside of the describe block:
it('Login Test Outside of Describe', function(){

    // cy.visit('https://opensource-demo.orangehrmlive.com')
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
})