export class Utility {
  getBaseUrl() {
    let envi = Cypress.env("ENV"); //Get the value of evnironment variable i.e ENV
    let vercel_url = process.env.VERCEL_URL;
    if (envi == "production")
      //Check the value
      return "https://www.proudction-website.com"; //return desired url
    else if (envi == "development") return vercel_url;
    else if (envi == "local") return "http://localhost:3000";
  }
}
