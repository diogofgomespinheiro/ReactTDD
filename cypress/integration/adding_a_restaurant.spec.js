describe("adding restaurant ", () => {
  it("displays restaurants in the list", () => {
    const restaurantName = "Sushi Place";

    cy.visit("http://localhost:1234");

    cy.get("[data-test='addRestaurantButton']")
      .click();
    
    cy.get("[data-test='newRestaurantName']")
      .type(restaurantName);    
      
    cy.get("[data-test='saveNewRestaurantNameButton']")
    .click();

    cy.contains(restaurantName);
  })
})