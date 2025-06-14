import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders Start Quiz button and starts quiz on click', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.contains('Question').should('exist');
  });

  it('allows answering questions and shows score', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('button').first().click(); // simulate answer
    }