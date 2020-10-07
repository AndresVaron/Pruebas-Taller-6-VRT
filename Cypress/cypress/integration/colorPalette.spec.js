const existingEmail = "fake123456712@email.com";
const existingPassword = "fake123456712@email.com";
const existingUsername = "fake123456712";

describe("Color Palette Tests", () => {
  it("Generates a new Color palette", () => {
    cy.visit("https://andresvaron.github.io/Pruebas-Taller-6-VRT/");
    cy.screenshot("Inicial");
    cy.get("#btnGenerateRandom").click();
    cy.screenshot("Final");
  });
});
