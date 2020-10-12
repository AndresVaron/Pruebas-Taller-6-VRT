describe("Color Palette Tests", () => {
  it("Generates a new Color palette", () => {
    cy.visit("https://andresvaron.github.io/Pruebas-Taller-6-VRT/");
    cy.screenshot("Inicial");
    cy.get("#btnGenerateRandom").click();
    cy.screenshot("Final");
  });
});
