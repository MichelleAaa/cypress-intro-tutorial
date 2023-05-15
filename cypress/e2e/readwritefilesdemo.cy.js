/// <reference types= "cypress"/>


// There's a fixtures folder that's generated when you add cypress. There's already a json file there that has some sample data. We can add to example.json or make a new one.
// You can directy access the files in the fixtures folder.


// All of the content from example.json is saved into the test_data variable. Then we can reference test_data below to access the data.
before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read files using Fixture', function(){

    // If your file is within the fixtures folder you can directly give the name of the file.
    // Note that you can also leave off .json if you want:
    // cy.fixture('example').then((data) => {
    cy.fixture('example.json').then((data) => {
        // name is a key in the example.json file.
        // cy.log() will print that data to the test console.
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.name)
    cy.log(this.test_data.email)

})

it('Read file using readFile', function(){
    // It's suggested to always keep your files within the file folder structure so you don't loose it/risk it being moved.
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
    })
})

it('Write File Demo', function(){
    // This would get created in the root. If you prefer, you can provide a path instead to have it save elsewhere.
    cy.writeFile('sample.txt', 'Testing the write file\n')
    cy.writeFile('sample.txt', 'Testing the write file a 2nd Time', {flag: 'a+'})
    // Note that the second statement overwrites the first, unless you add the flag. -- the a+ flag is to append this new text to the pre-existing text.

})