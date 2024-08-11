// Command to login with valid credentials
Cypress.Commands.add("login", () => {
	cy.visit("https://careglp-staging.carevalidate.com/login");
	cy.get('[data-testid="email"]').type("qa+employee@carevalidate.com");
	cy.get('[data-testid="login-with-password"]').click();
	cy.get("input[name=password]").type("bLPgk5tr7D3ZqpXvV@aNKz");
	cy.get("button[type=submit]").click();
});

// Command that performns "Continue" action
Cypress.Commands.add("continue", () => {
	cy.get(".q-btn-item").contains("Continue").as("continuebtn");
	cy.get("@continuebtn").click();
	cy.wait(1000);
});
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
