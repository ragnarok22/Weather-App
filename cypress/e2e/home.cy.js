describe('Home', () => {
  beforeEach(() => {
    cy.fixture("cities.json").as("cities")
    cy.fixture("weather.json").as("weather")
    cy.intercept("GET", "**/api/cities\?*", { fixture: "cities"}).as("getCities")
    cy.intercept("GET", "**/api/weather\?**", { fixture: "weather"}).as("getWeather")
  })

  it('load the home', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').contains("submit")
  })

  it('get the cities and the weathers', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[type="text"]').type("paris")
    cy.get('button[type="submit"]').click()
  })
})