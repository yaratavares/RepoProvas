/// <reference types="cypress" />
import faker from "@faker-js/faker";

describe("Sign-up", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("should sign-up successfully", () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    cy.visit("http://localhost:3000/cadastro");

    cy.intercept("POST", "http://localhost:5000/sign-up").as("signup");

    cy.get("#inputemail").type(user.email);
    cy.get("#inputpassword").type(user.password);
    cy.get("#inputconfirmPassword").type(user.password);

    cy.contains("Cadastrar").click();

    cy.wait("@signup");

    cy.url().should("equal", "http://localhost:3000/login");
  });
});
