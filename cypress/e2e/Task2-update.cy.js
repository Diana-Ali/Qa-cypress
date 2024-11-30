/// <reference types="cypress"/>
describe("update products",()=>{

    
    before("validate that the user can add products to the shopping cart ." ,() =>{
        cy.visit("/")
        cy.get("#search").type("shirt"+"{enter}")
        cy.get(".product-item").eq(1).click()
        cy.get("#option-label-size-143-item-168").click()
        cy.get("#option-label-color-93-item-57").click()
        cy.get("#qty").clear().type(3)
        cy.contains("button","Add to Cart").click()
        cy.get(".page.messages").should("contain","You added Circe Hooded Ice Fleece to your")
        cy.wait(5000)

        cy.get(".counter-number").should("contain",3)

        
       })
    
    it("validate that the user can update products from the shopping cart ",() =>{
        //cy.visit("/")
        cy.get(".counter-number").click()
       cy.get(".action.edit").click()
       cy.get("[option-label=S]").click()
       cy.get("[aria-label=Gray]").click()
       cy.get("#qty").clear().type(1)
       cy.get("[title='Update Cart']").click()
       cy.get(".page.messages").should("contain","Circe Hooded Ice Fleece was updated in your shopping cart.")
       cy.url().should("eq","https://magento.softwaretestingboard.com/checkout/cart/")
       cy.get(".page-title").should("contain","Shopping Cart")
    })


   })