describe("Pokemon App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Frontpage Pokemon list can be visit", () => {
    cy.contains("Pokedex");
  });
});
