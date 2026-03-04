describe("Калькулятор суми - E2E тест", () => {

  it("Користувач вводить числа і отримує правильну суму", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Калькулятор суми");

    cy.get('input[placeholder="Введіть перше число"]')
      .type("5");

    cy.get('input[placeholder="Введіть друге число"]')
      .type("7");

    cy.contains("Обчислити суму").click();

    cy.contains("Сума: 12").should("be.visible");
  });

  it("При пустих значеннях показує 0", () => {
    cy.visit("http://localhost:3000");
  
    cy.contains("Обчислити суму").click();
  
    cy.contains("Сума: 0").should("be.visible");
  });

});