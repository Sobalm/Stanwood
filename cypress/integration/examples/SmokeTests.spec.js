import MainPage from '../pages/MainPage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

describe('Smoke tests', function()
{

    beforeEach(() => {
        cy.visit('https://mcswiss-web-stage.web.app/')
        cy.viewport('macbook-15')
    })
    
    it('Verify that at least one product is in the category', function()
    {
        const mainPage = new MainPage()
        mainPage.getCategories().first().click()
        expect(mainPage.getAllProductForFirstCategory().its('length').should('be.gte', 1))
    })

    it('Verify that user can be registered', function()
    {
        cy.get('[data-testid=register-btn] > span').click()
        const registerPage = new RegisterPage()
        registerPage.fillName('John')
        registerPage.fillSurname('Doe')
        registerPage.fillPhoneNumber('123456789')
        registerPage.fillCity('Berlin')
        registerPage.fillZipCode('10437')
        registerPage.fillStreetName('Pappelallee')
        registerPage.fillBirthdayInfo('04.03.1992')
        registerPage.fillResidencyCountry('Deutschland')
        registerPage.fillNationalityCountry('Deutschland')
        registerPage.fillEmail('test@test.com')
        registerPage.fillPassword('testPassword1')
        registerPage.fillConfirmPassword('testPassword1')
        registerPage.fillCompanyName('Amazon')
        registerPage.fillCompanyType('GmbH')
        registerPage.fillIBAN('DE89 3704 0044 0532 0130 00')
        registerPage.getAcceptTermsAndConditions().click()
        expect(registerPage.getRegisterButton().should('be.enabled'))
        registerPage.getRegisterButton().click()
        expect(registerPage.getRegisterButton().should('not.exist'))
    })

    it('Verify login failure', function()
    {
        const mainPage = new MainPage()
        const loginPage = new LoginPage()
        mainPage.getLogInButton().click()
        loginPage.typeLogin('test@test.com')
        loginPage.typePassword('TestTest1!')
        loginPage.getAcceptTermsAndConditions().click()
        loginPage.getLoginButton().click()
        expect(loginPage.getErrorMessage().should('be.visible'))

    })
})