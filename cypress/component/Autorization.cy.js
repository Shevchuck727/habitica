import React from 'react'
import Autorization from '../../src/UI/Objects/Autorization'

describe('<Autorization />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Autorization />)
  })
})