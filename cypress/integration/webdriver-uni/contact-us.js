/// references types="cypress" />

describe("Test Contact Us form via WebDriverUbi", ()=>{
    it("Should be able to submit a successful mission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Joe");
    }) 
})