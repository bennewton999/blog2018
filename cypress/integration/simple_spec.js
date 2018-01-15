describe('Home Page Test', () => {
  it('Successfully loads', () => {
    cy.visit('/')
    cy.screenshot()
    
    cy.get('.my-name').should('contain', 'Ben Newton')
    
  })
  it('Has correct Title', () => {
    cy.title().should('eq', 'Ben Newton')
  })




})
