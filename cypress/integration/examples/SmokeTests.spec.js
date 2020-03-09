describe('Smoke tests', function()
{

    beforeEach(() => {
        cy.visit('https://mcswiss-web-stage.web.app/')
        cy.viewport('macbook-15')
    })
    
    it('Verify that at least one product is in the category', function()
    {
        cy.get('.d-flex.w-100').first().click()
        expect(cy.get('.container-fluid').its('length').should('be.gte', 1))
    })

    it('Verify that user can be registered', function()
    {
        cy.get('[data-testid=register-btn] > span').click()
        cy.get('#formly_1_input_firstName_0').type('John')
        cy.get('#formly_1_input_lastName_1').type('Doe')
        cy.get('#formly_1_phone-input_phone_2').type('123456789')
        cy.get('#formly_1_input_city_3').type('Berlin')
        cy.get('#formly_1_input_zip_4').type('10437')
        cy.get('#formly_1_input_street_5').type('Pappelallee')
        cy.get('#formly_1_datepicker-input_birthday_6').type('04.03.1992')
        cy.get('#formly_1_select-input_residenceCountryCode_7 > .ng-select-container > .ng-value-container > .ng-input').type('Deutschland')
        cy.get('.ng-option.ng-option-marked').click()
        cy.get('#formly_1_select-input_nationalityCountryCode_8 > .ng-select-container > .ng-value-container > .ng-input > input').type('Deutschland')
        cy.get('.ng-option.ng-option-marked').click()
        cy.get('#formly_1_input_email_9').click().type('test@test.com')
        cy.get('#formly_2_input_password_0').click().type('testPassword1')
        cy.get('#formly_2_input_passwordConfirm_1').click().type('testPassword1')
        cy.get('#formly_2_input_companyName_11').type('Amazon')
        cy.get('#formly_2_select-input_companyType_15').type('GmbH')
        cy.get('.ng-option.ng-option-marked').click()
        cy.get('#formly_2_input_iban_18').type('DE89 3704 0044 0532 0130 00')
        cy.get('formly-form > formly-field:nth-child(20) > app-formly-wrapper-form-field > div > app-formly-field-checkbox > label').click()
        expect(cy.get('div.modal-footer > div > button.btn.btn-primary').should('be.enabled'))
        cy.get('div.modal-footer > div > button.btn.btn-primary').click()
    })

    it('Verify login failure', function()
    {
        cy.get('[data-testid="login-btn"]').click()
        cy.get('[data-testid="login-email"]').type('test@test.com')
        cy.get('[data-testid="login-password"]').type('TestTest1!')
        cy.get('formly-form > formly-field:nth-child(3) > app-formly-wrapper-form-field > div > app-formly-field-checkbox > label > span.custom-control-label > span').click()
        cy.get('app-login-modal > app-modal > div.modal-footer > div > button.btn.btn-primary').click()
        expect(cy.get('[data-testid="login-error-msg"]').should('be.visible'))

    })
})