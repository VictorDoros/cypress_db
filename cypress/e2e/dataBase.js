import spok from "cy-spok"

describe("Data base practice", () => {
  it("Get the movies released after 2022 - I method assertion", () => {
    cy.task("queryDb", `SELECT * FROM Movies WHERE YEAR > 2022`).then(
      (result) => {
        expect(result[0].Title).to.eq("Barbie")
        expect(result[0].Company).to.eq("Warner Bros. Studios")
        expect(result[0].Director).to.eq("Greta Gerwig")
        expect(result[0].Year).to.be.above(2022).and.eq(2023)
      }
    )
  })

  it("Get the movies released after 2022 - II method assertion", () => {
    chai.config.truncateThreshold = 300 // To display the expected result in console instead of "Object [object]" when asserting

    cy.task("queryDb", `SELECT * FROM Movies WHERE YEAR > 2022`).then(
      (result) => {
        expect(result[0]).to.deep.eq({
          Title: "Barbie",
          Company: "Warner Bros. Studios",
          Director: "Greta Gerwig",
          Year: 2023,
        })
      }
    )
  })

  it("Get the movies released after 2022 - III method assertion", () => {
    cy.task("queryDb", `SELECT * FROM Movies WHERE YEAR > 2022`).then(
      (result) => {
        cy.wrap(result[0]).should(
          spok({
            Title: "Barbie",
            Company: "Warner Bros. Studios",
            Director: "Greta Gerwig",
            Year: 2023,
          })
        )
      }
    )
  })
})
