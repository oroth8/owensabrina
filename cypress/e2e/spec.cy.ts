import { Utility } from "../support/utility";

const url: string = new Utility().getBaseUrl() || "http://localhost:3000";

describe("Verify Environment Config" + url, () => {
  it("Verify Environment", () => {
    cy.visit(url); //use url variable
  });
});
