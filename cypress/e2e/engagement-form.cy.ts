import { Utility } from "../support/utility";
import { faker } from "@faker-js/faker";

const url: string = new Utility().getBaseUrl() || "http://localhost:3000";

const pageURL = (path: string) => {
  return `${url}${path}`;
};

describe("Verify Engagement Party Form Works", () => {
  it("should visit rsvp page", () => {
    cy.visit(pageURL("/engagement-party/rsvp")); //use url variable
  });

  it("successfully submits the form", () => {
    cy.get("#name").should("be.visible").type(faker.name.fullName());
    cy.get("#phone")
      .should("be.visible")
      .type(faker.datatype.number({ min: 1000000000 }).toString());
    // cy.get('button[type="submit"]')
    //   .should('be.visible')
    //   .click()
    // cy.location('pathname').should('contain', '/engagement-party/edit/:id')

    // cy.contains('You will receive an email to finish the purchase.')
    //   .should('be.visible')
  });
});
