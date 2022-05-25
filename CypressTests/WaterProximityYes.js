/// <reference types="cypress"/>


it('Water Proximity Yes Test', function() {

    //Log into Hurricane Insurance website
    cy.visit('https://sure-qa-challenge.vercel.app/')

    //click into zip code text box and enter a random five digit number
    let randomZip = Math.floor(Math.random(toString)*90000) + 10000 
    cy.get('.MuiInputBase-input')
        .type(randomZip);

    //click 'Get A Quote' button
    cy.get('.MuiButton-label')
        .click()

    //Select random option of the three building materials given    
    //declare all of the options for data-testid
    let options = ["straw","sticks","bricks"]
    //declare a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 2)
    //build the selector for the random radio button
    let randomOption = '[data-testid="' + options[randomNumber] + '"] > .MuiButtonBase-root > .MuiIconButton-label > .jss22';
    //select the random radio button
    cy.get(randomOption)
        .click()

    //select and click 'Next' button
    cy.get('.MuiButton-label')
        .click()

    //select button for 'Yes' 
    cy.get(':nth-child(1)>.MuiButtonBase-root>.MuiIconButton-label>.jss36')
        .click()

    //select and click 'Next' button
    cy.get('.MuiButton-label')
        .click()

    //Ensure that the text offering flood insurance is present
    cy.get('.MuiFormControlLabel-root>.MuiTypography-root')
        .should('contain', 'Include Flood Protection')

    //Ensure that the estimate for flood insurance is above $0 
    cy.get('.MuiFormControlLabel-root>.MuiTypography-root')
        .invoke('text')
        .then(text => +text.replace(/[^\d]/g, '').trim())
        .should('be.gt', 0)

     //Ensure that the checkbox is not checked and enabled
    cy.get('[type="checkbox"]')
        .should('not.be.checked')
        .and(('not.be.disabled'))

    //Ensure that the client can view the Standard plan and that an estimate is given which is above $0
    cy.get('[data-testid="price_Standard"]')
        .invoke('text')
        .then(text => +text.replace('$', '').trim())
        .should('be.gt', 0)

     //Ensure that the client can view the Complete plan and that an estimate is given which is above $0
     cy.get('[data-testid="price_Complete"]')
        .invoke('text')
        .then(text => +text.replace('$', '').trim())
        .should('be.gt', 0)
})






