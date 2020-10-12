describe("Color Palette VRT", () => {
    it("Generates two color palettes", () => {
        cy.visit("https://andresvaron.github.io/Pruebas-Taller-6-VRT/");
        cy.get("#btnGenerateRandom").click();
        cy.screenshot('base/' + Cypress.env('imageId'));
        cy.get("#btnGenerateRandom").click();
        cy.screenshot('modified/' + Cypress.env('imageId'));
    });
});
