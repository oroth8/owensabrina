import { Utility } from '../support/utility';

const url: string = new Utility().getBaseUrl() || 'http://localhost:3000';

const pageURL = (path: string) => {
  return `${url}${path}`;
}

describe('Verify Page Loads', () => {
    it('Verify Tavel Page', () => {
        cy.visit(pageURL('/travel'));
    });
    it('Verify Wedding Party Page', () => {
        cy.visit(pageURL('/wedding-party'));
    });
    it('Verify RSVP Page', () => {
        cy.visit(pageURL('/RSVP'));
    });
    it('Verify Registry Page', () => {
        cy.visit(pageURL('/registry'));
    });
    it('Verify Events Page', () => {
        cy.visit(pageURL('/events'));
    });
    it('Verify Address Page', () => {
        cy.visit(pageURL('/address'));
    });
    it('Verify Engagement Party RSVP Page', () => {
        cy.visit(pageURL('/engagement-party/rsvp'));
    });
    it('Verify Engagement Party Find Page', () => {
        cy.visit(pageURL('/engagement-party/rsvp'));
    });
    it('Verify Engagement Party Edit Page', () => {
        cy.visit(pageURL('/engagement-party/edit/1'));
    });
  });