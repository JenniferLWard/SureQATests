/// <reference types="cypress"/>


it('Zip Code Too Short Test', function() {

    //Log into Hurricane Insurance website
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //Enter in a random zip code that is too short - Ensure that the error text shows
    let randomZip = Math.floor(Math.random(toString)*9000) + 1000 
    cy.get('.MuiInputBase-input')
        .type(randomZip)
        .type('{enter}')

    //Ensure that you were not taken to a new page
    cy.url().should('eq', 'https://sure-qa-challenge.vercel.app/')

    //Ensure that a warning pops up stating that zip is invalid
    cy.get('.MuiFormHelperText-root')
        .should('contain', 'Invalid zip code');

    //Ensure that submit button is disabled
    cy.get('.MuiInputBase-input')
        .invoke('attr', 'aria-invalid')
        .should('eq', 'true')
})