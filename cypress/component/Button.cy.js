import React from 'react'
import Button from '../../src/UI/Objects/Button'

describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button />)
  })
})