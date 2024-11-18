describe("TP1 tests", { testIsolation: false }, () => {
  //visitamos la página para cada grupo de pruebas
  beforeEach(() => {
    cy.visit("https://automationintesting.online/");
  });
  it("Verifica que la información del hotel esté presente en la página", () => {
    //buscamos que sea visible el contenedor de la información
    cy.get(".col-sm-5").should("be.visible");
    cy.get(".fa-home").should("be.visible");
    //buscamos que los tags <p> tengan los datos correctos y que sean visibles los iconos
    cy.get("p").contains("Shady Meadows B&B");
    cy.get("p").contains(
      "The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S"
    );
    cy.get(".fa-phone").should("be.visible");
    cy.get("p").contains("012345678901");
    cy.get(".fa-envelope").should("be.visible");
    cy.get("p").contains("fake@fakeemail.com");
  });
  it("Asegurate de que haya al menos una imagen visible", () => {
    //buscamos las imagenes que sean visibles y tengan un recurso específico.
    cy.get("img.hotel-logoUrl")
      .should("be.visible")
      .and(($img) => {
        expect($img).to.have.attr("src").and.include("/images/rbp-logo.jpg");
      });
    cy.get("img.hotel-img")
      .should("be.visible")
      .and(($img) => {
        expect($img).to.have.attr("src").and.include("/images/room2.jpg");
      });
  });
});
