/// <reference types="Cypress" />

class RegisterPage {

    fillName(value)
    {
        const nameInputField = cy.get('#formly_1_input_firstName_0')
        nameInputField.clear()
        nameInputField.click()
        nameInputField.type(value) 
        return this
    }
    
    fillSurname(value)
    {
        const surnameInputField = cy.get('#formly_1_input_lastName_1')
        surnameInputField.clear()
        surnameInputField.click()
        surnameInputField.type(value)
        return this
    }

    fillPhoneNumber(value)
    {
        const phoneNumberInputField = cy.get('#formly_1_phone-input_phone_2')
        phoneNumberInputField.clear()
        phoneNumberInputField.click()
        phoneNumberInputField.type('123456789')
    }

    fillCity(value)
    {
        const cityInputField = cy.get('#formly_1_input_city_3')
        cityInputField.clear()
        cityInputField.click()
        cityInputField.type(value)
        return this
    }

    fillZipCode(value)
    {
        const zipCodeInputField = cy.get('#formly_1_input_zip_4')
        zipCodeInputField.clear()
        zipCodeInputField.click()
        zipCodeInputField.type(value)
        return this
    }

    fillStreetName(value)
    {
        const streetNameInputField = cy.get('#formly_1_input_street_5')        
        streetNameInputField.clear()
        streetNameInputField.click()
        streetNameInputField.type(value)
        return this
    }
    
    fillBirthdayInfo(value)
    {
        const birthDayInputField =  cy.get('#formly_1_datepicker-input_birthday_6')        
        birthDayInputField.type(value)
        return this
    }

    fillResidencyCountry(value)
    {
        const residencyCountryNameInputField = cy.get('#formly_1_select-input_residenceCountryCode_7 > .ng-select-container > .ng-value-container > .ng-input')
        residencyCountryNameInputField.type(value)
        cy.get('.ng-option.ng-option-marked').click()        
        return this
    }

    fillNationalityCountry(value)
    {
        const nationalityInputField = cy.get('#formly_1_select-input_nationalityCountryCode_8 > .ng-select-container > .ng-value-container > .ng-input > input')
        nationalityInputField.type(value)
        cy.get('.ng-option.ng-option-marked').click()        
        return this
    }

    fillEmail(value)
    {
        const emailInputField = cy.get('#formly_1_input_email_9')
        emailInputField.clear()
        emailInputField.click()
        emailInputField.type(value)
        return this
    }

    fillPassword(value)
    {
        const passwordInputField = cy.get('#formly_2_input_password_0')
        passwordInputField.clear()
        passwordInputField.click()
        passwordInputField.type(value)
        return this
    }

    fillConfirmPassword(value)
    {
        const confirmPasswordInputField = cy.get('#formly_2_input_passwordConfirm_1')
        confirmPasswordInputField.clear()
        confirmPasswordInputField.click()
        confirmPasswordInputField.type(value)
        return this
    }

    fillCompanyName(value)
    {
        const companyName = cy.get('#formly_2_input_companyName_11')
        companyName.clear()
        companyName.click()
        companyName.type('Amazon')
        return this
    }

    fillCompanyType(value)
    {
        const companyType =  cy.get('#formly_2_select-input_companyType_15')
        companyType.type(value)
        cy.get('.ng-option.ng-option-marked').click()
        return this
    }

    fillIBAN(value)
    {
        const ibanInputField = cy.get('#formly_2_input_iban_18')
        ibanInputField.clear()
        ibanInputField.click()
        ibanInputField.type(value)
        return this
    }

    getAcceptTermsAndConditions()
    {
        const termsAndCoditions = cy.get('formly-form > formly-field:nth-child(20) > app-formly-wrapper-form-field > div > app-formly-field-checkbox > label')
        return termsAndCoditions
    }

    getRegisterButton()
    {
        const registerButton = cy.get('div.modal-footer > div > button.btn.btn-primary')
        return registerButton
    }

}
    export default RegisterPage
