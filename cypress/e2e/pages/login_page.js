// To make updating easier, it's typical to use a class for a specific type of test. Then break down the steps into functions.

export class LoginPage{

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    // Some people will also create something like a login() function, which would call the other functions below, that comprise the steps of the login. But we aren't doing it here.
    // login(){
    // }

    enterUsername(username){
        cy.get(this.username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }
}