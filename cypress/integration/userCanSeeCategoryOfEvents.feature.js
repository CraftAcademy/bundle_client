describe("User can select event by category", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/events",
        response: "fixture:articles.json"
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/events/**",
        response: "fixture:specific_article.json"
      });
      cy.visit("/");
    });
    it("can see all articles in one category", () => {
      cy.get("#category-header");
      cy.get("#sports-tab").click();
      cy.get("#article-list").should("contain", "Play Soccer");
    });
  });