/// <reference types= "cypress"/>
/// <reference types= "cypress-downloadfile"/>

it('File Upload Test', function(){
    // you need a website where you can do a sample upload.
    cy.visit('https://trytestingthis.netlify.app/')
    // attachFile comes from the package we added in commands.j, cypress-file-upload
    // If the file you want to attach is in the fixtures folder, then you just need to give the file name. Otherwise you have to give the file path.
    cy.get('#myfile').attachFile('example.json')
}) 

it('File Download Test', function(){
    // It gets saved to mydownloads. The file name it will get is example.jpg. (mydownloads is created at the root of the file.)
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})