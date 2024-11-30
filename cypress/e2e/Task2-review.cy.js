
/// <reference types="cypress"/>
describe("Review products",()=>{


        Cypress.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes("valid is not a function")) {
            return false; 
          }
          throw err; 
        });

    before("" ,() =>{
        cy.visit("/")


        
       })

it.only("validate that the user can submit a review on the product page",()=>{
    //  cy.visit("/")
  
  cy.get(".action.view").first().click()
 cy.get("#Rating_5").click({force: true})
  cy.get("#nickname_field").clear().type(" Diana")
  cy.get("#summary_field").clear().type("it's nice ")
  cy.get("#review_field").clear().type("Review by Diana Posted on 29/11/24")
  cy.contains("span","Submit Review").click()
  cy.wait(3000)
  cy.get(".page.messages").should("contain","You submitted your review for moderation.")
  cy.url().should("eq","https://magento.softwaretestingboard.com/radiant-tee.html")

  
  
  })
  
     })