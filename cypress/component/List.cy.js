import React from 'react'
import List from '../../src/UI/Objects/List'

describe('<List />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<List />)
  })
})