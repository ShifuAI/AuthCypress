var Username = "admin"
var Password = "init"
describe ('login', ()     =>{
    context ('login localhost',()=> {
      it ('visit and login',()=>{ 
    cy.intercept('/partials/loginForm.html').as('load')
      cy.visit('http://localhost:8080/')
    cy.wait('@load')
       
      cy.get('.form-control[placeholder=Username]').clear().type(Username)
     cy.get('.form-control[placeholder=Password]').clear().type(Password)
     

     cy.intercept('/rest/table/plans/data?').as('plans/data?')
      cy.get('.btn[type=submit]').click()
     cy.wait('@plans/data?')

     cy.intercept('/rest/table/functions/data?').as('data')
      cy.xpath('/html/body/div[1]/header/div/nav/div/div[2]/ul[1]/li[2]/a/span').click()
     cy.wait("@data")
     
      cy.xpath('/html/body/div[1]/header/div/nav/div/div[2]/ul[1]/li[3]/a/span').click()
     cy.wait("@data")

     cy.xpath('/html/body/div[1]/header/div/nav/div/div[2]/ul[1]/li[4]/a/span').click()
     cy.wait("@data")

     cy.intercept('/rest/scheduler/task').as('scheduler')
     cy.xpath('/html/body/div[1]/header/div/nav/div/div[2]/ul[1]/li[5]/a/span').click()
     cy.wait("@scheduler")

     cy.intercept('/partials/components/gridStatusSummary.html').as('gridstatus')
     cy.xpath('/html/body/div[1]/header/div/nav/div/div[2]/ul[1]/li[6]/a/span').click()
     cy.wait("@gridstatus")
     
     cy.intercept('/rest/screens/input/byscreen/executionParameters').as('executionParameters')
     cy.xpath('/html/body/div[1]/header/div/nav/div/div[2]/ul[1]/li[7]/a/span').click()
     cy.wait("@executionParameters")

      })

    })
})
