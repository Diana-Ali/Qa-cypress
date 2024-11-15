/// <reference types="cypress"/>


describe("Selector Task" ,() =>{

it(" Selector" ,()=> {
    cy.visit("https://demo.productionready.io/#/register")

cy.get("a.navbar-brand ")//conduit link
cy.get(".nav-link").contains("Home")//home link

cy.get(".navbar.navbar-light").find("li").contains("Sign up")//sign up link
//cy.contains(".col-md-6 h1","Sign up")
cy.get("[ng-bind='$ctrl.title']").first()//get sign up title
 cy.get(".text-xs-center").contains("a","Have an account?")// get link
 cy.get("fieldset").find("input").filter("[placeholder='Username']").type("Diana")//get username
 cy.get("[type='email']").type("dsfi9475@gmail.com")//get email
 cy.get(".ng-pristine.form-control").eq(0).type("1234diana-")//get pass
 cy.get("[type='submit']").click()//get sign up
cy.contains(".logo-font","conduit")//get conduit
cy.contains("span","© 2024. An interactive learning project from")//get footer









})








})
