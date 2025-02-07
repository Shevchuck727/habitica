import React from 'react'
import Completed from '../../src/UI/Windows/Challenges/Completed'

describe('<Completed />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Completed />)
  })
})