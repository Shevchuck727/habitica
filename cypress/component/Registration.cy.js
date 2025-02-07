import React from 'react'
import Registration from '../../src/UI/Windows/Autorization/Registration'

describe('<Registration />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Registration />)
  })
})