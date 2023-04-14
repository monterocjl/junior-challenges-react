describe("Pokemon App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Access and show page Pokemon Details", () => {
    cy.get("a:last").contains("Raticate").should("be.visible");
    cy.get("a:last").click();

    cy.contains("Measures");
    cy.contains("Base stats");
    cy.contains("Moves");
  });
});
