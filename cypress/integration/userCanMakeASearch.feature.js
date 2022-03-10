const { Item } = require('semantic-ui-react')

describe('User can make a search inquiry', () => {
  beforeEach(() => {
    // cy.intercept(
    //   'GET',
    //   'https://api.github.com/search/users?q=gsim1903&accept=vnd.github.v3+json',
    //   {
    //     fixture: 'searchA.json',
    //   },
    // )
    cy.visit('/')
    cy.get('[data-cy=search-box]').type("gsim1903")
    cy.get('[data-cy=search-button]').click()
  })
  debugger

  //Happy path

  it('is expected to see search box', () => {
    cy.get('[data-cy=search-box]').should('exist')
  })

  it('is expected to see barrack as the top search result', () => {
    cy.get('[data-cy=gitlist]').first().should('contain', 'gsim1903')
  })

  it('is expected to have three search results ', () => {
    cy.get('[data-cy=gitlist]').children().should('have.length', 1)
  })
})
