import React from 'react'
import Tasks from '../../src/UI/Windows/Challenges/Tasks'

describe('<Tasks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Tasks />)
  })
})