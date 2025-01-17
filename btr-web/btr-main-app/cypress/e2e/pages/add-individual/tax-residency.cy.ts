describe('pages -> Add individual', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('verify TaxResidency component is working', () => {
    cy.get('[data-cy="showAddIndividualPersonManually"]').trigger('click')

    const radioGroup = cy.get('[data-cy="testTaxResidency"]').should('exist')

    radioGroup.get('[type="radio"][value="true"]').check().should('be.checked')
    radioGroup.get('[type="radio"][value="false"]').check().should('be.checked')
  })
})
