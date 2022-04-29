/// <reference types="cypress" />
import faker from "@faker-js/faker";

describe("Login", () => {
  beforeEach(() => {
    cy.resetDatabase();
  });

  it("should login successfully", () => {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    cy.visit("http://localhost:3000");

    cy.intercept("POST", "http://localhost:5000/sign-in").as("login");

    cy.request("POST", "http://localhost:5000/sign-up", user).then(() => {
      cy.get("#inputemail").type(user.email);
      cy.get("#inputpassword").type(user.password);
      cy.contains("Entrar").click();
    });

    cy.wait("@login");

    cy.url().should("equal", "http://localhost:3000/");
  });
});
