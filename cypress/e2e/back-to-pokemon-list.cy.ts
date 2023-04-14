describe("Pokemon App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/20");
  });

  it("Back to page Pokemon List", () => {
    cy.get("a:first").click();
    cy.contains("Pokedex");
  });
});
