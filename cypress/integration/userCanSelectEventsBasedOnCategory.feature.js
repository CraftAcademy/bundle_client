describe("user views the list of category", () => {
    beforeEach(() => {
      cy.server();
        cy.route({
          method: "GET",
          url: "http://localhost:3000/events",
          response: "fixture:events_list.json",
        });
      cy.visit("/");
    });

  it("can see events in sports category", () => {
    cy.get("#category-header");
    cy.get("#sports-tab").click();
    cy.get("#event-list").should("contain", "We need more players");
  });
  it("can see events in outdoors category", () => {
    cy.get("#category-header");
    cy.get("#outdoors-tab").click();
    cy.get("#event-list").should("contain", "From Slussen to Skansen");
  });
  it("can see events in food category", () => {
    cy.get("#category-header");
    cy.get("#food-tab").click();
    cy.get("#event-list").should("contain", "Oyster and champagne");
  });
  it("can see events in games category", () => {
    cy.get("#category-header");
    cy.get("#games-tab").click();
    cy.get("#event-list").should("contain", "Kill all the zombies");
  });
  it("can see events in casual category", () => {
    cy.get("#category-header");
    cy.get("#casual-tab").click();
    cy.get("#event-list").should("contain", "Girls afternoon at the mall");
  });
});
