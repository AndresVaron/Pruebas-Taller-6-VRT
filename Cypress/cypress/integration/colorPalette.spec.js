const existingEmail = "fake123456712@email.com";
const existingPassword = "fake123456712@email.com";
const existingUsername = "fake123456712";

describe("Color Palette Tests", () => {
  it("Generates a new Color palette", () => {
    cy.visit("https://andresvaron.github.io/Pruebas-Taller-6-VRT/");

    cy.get(".login-button").click();
    cy.get("#passwordInput").type("fake@email.com");
    cy.get("#usernameInput")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get('.btn-info[type="submit"]').click();
    cy.contains(
      "your email address / username or password is incorrect"
    ).should("be.visible");
  });
});
