
/// <reference types="cypress" />
describe('Test Suit 1 | Challenge 2 | Verify "To do list" ',()=>{
    
    before(()=>{
        cy.fixture('fixture.json').as('tareas');
        });
       
    beforeEach(() => {
        cy.visit('');
        cy.get('span').contains('Iniciá sesión').dblclick();
        cy.get('#user').type(Cypress.env().username);
        cy.get('#pass').type(Cypress.env().password);
        cy.get('#submitForm').click();
        cy.get('#todolistlink').click();
    });

        

    it('TC 1 | Add 5 tasks',()=>{
        cy.fixture('fixture.json').then((data) => {
        data.tareas.forEach((tarea) => {
        cy.get("[id^='sen']").type(tarea)
        cy.get('button#sendTask').contains('Send').click()
      
            });
        });
    });
   
    it('TC 2 | Verify that buttons “All”, “Completed”, “Active” and “Remove all” exist',()=>{
        cy.get('button#completed').should('exist');
        cy.get('#all').should('exist');
        cy.get('#active').should('exist');
    })
 
    it('TC 3 | Add 2 tasks, complete them and delete the second',()=>{
        cy.fixture('fixture.json').then((data) => {
        const tarea1 = data.tareas[0];
        const tarea2 = data.tareas[1];
        cy.get('input[name=task]').type(tarea1);
        cy.get('button#sendTask').contains('Send').click()
        cy.get('input[name=task]').type(tarea2)
        cy.get('button#sendTask').contains('Send').click()
        cy.xpath("//p[starts-with(text(), 'tarea 1')]").click();
        cy.get('p').contains(tarea2).click();
        cy.get(':nth-child(2) > .css-vuy1kp > .chakra-button').click()
    });
 
        
    });

    it('TC 4 | Add 2 tasks and delete the first',()=>{
        cy.fixture('fixture.json').then((data) => {
        const tarea1 = data.tareas[0];
        const tarea2 = data.tareas[1];
        cy.get('input[name=task]').type(tarea1)
        cy.get('button#sendTask').contains('Send').click()
        cy.get('input[name=task]').type(tarea2)
        cy.get('button#sendTask').contains('Send').click()
        cy.get(':nth-child(1) > .css-vuy1kp > .chakra-button').click()
        }); 
    })
});
