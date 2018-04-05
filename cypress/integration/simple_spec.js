describe("Home Page Test", () => {
  it("Successfully loads", () => {
    cy.visit("http://localhost:9000/");
    cy.screenshot();

    cy.get(".my-name").should("contain", "Ben Newton");
  });
  it("Has correct Title", () => {
    cy.title().should("eq", "Ben Newton");
  });
});

describe("Uses Page Test", () => {
  it("Successfully loads", () => {
    cy.visit("http://localhost:9000/uses");
    cy.screenshot();

    cy.get(".my-name").should("contain", "What I Use");
  });
  it("Has correct Title", () => {
    cy.title().should("eq", "Uses | Ben Newton");
  });
});
