// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



import "cypress-xpath";
Cypress.Commands.add('returnBody', (url, token) => {
    return cy.request({ /* options */ })
      .its("body");
  });
  import 'cypress-file-upload';
  import "cypress-localstorage-commands"




  Cypress.Commands.add('clickOutside', function() {
    return cy.get('body').click(10,10); //0,0 here are the x and y coordinates
  });
  
  Cypress.Commands.add(
    'photo123.jpg', {
        prevSubject: false
    }, (fileName) => {
        Cypress.log({
            name: 'photo123.jpg',
        })
        return cy
            .fixture(fileName, 'base64')
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                // instantiate File from `application` window, not cypress window
                return cy.window().then(win => {
                    const file = new win.File([blob], fileName)
                    const dataTransfer = new win.DataTransfer()
                    dataTransfer.items.add(file)

                    return cy.document().trigger('drop', {
                        dataTransfer,
                    })
                })
            })
    }
)