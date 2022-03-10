const { Item } = require("semantic-ui-react");

describe('User can make a search inquiry', () => {
    beforeEach(() => {
        // cy.intercept("GET", "**/api/**" ,{
        //     fixture: "serachA.json"
        // }
        // )
        cy.visit('/')
    });
  
//Happy path

    it("is expected to see search box",() => {
        cy.get("[data-cy=search-box]").should("exist")

    });


  });