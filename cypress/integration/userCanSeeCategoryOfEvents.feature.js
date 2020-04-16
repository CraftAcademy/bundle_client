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

  describe('User can navigate the app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
  
  
    it('to Home tab',() => {
      cy.get('#home-tab').click();
      cy.get('#about-header').should('contain', 'Home');
    })
    it('to Outdoors tab',() => {
      cy.get('#outdoors-tab').click();
      cy.get('#about-header').should('contain', 'Outdoors');
    })
    it('to Home tab',() => {
      cy.get('#home-tab').click();
      cy.get('#about-header').should('contain', 'Home');
    })
    it('to Home tab',() => {
      cy.get('#home-tab').click();
      cy.get('#about-header').should('contain', 'Home');
    })
    it('to Home tab',() => {
      cy.get('#home-tab').click();
      cy.get('#about-header').should('contain', 'Home');
    })
  })