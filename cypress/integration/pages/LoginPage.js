class LoginPage {

    typeLogin(value)
    {
        const loginInputField = cy.get('[data-testid="login-email"]')
        loginInputField.type(value)
        return this
    }

    typePassword(value)
    {
        const passwordInputField = cy.get('[data-testid="login-password"]')
        passwordInputField.type(value)
        return this
    }

    getAcceptTermsAndConditions()
    {
        const acceptTermsAndConditions = cy.get('formly-form > formly-field:nth-child(3) > app-formly-wrapper-form-field > div > app-formly-field-checkbox > label > span.custom-control-label > span')
        return acceptTermsAndConditions
    }

    getLoginButton()
    {
        const loginButton = cy.get('app-login-modal > app-modal > div.modal-footer > div > button.btn.btn-primary')
        return loginButton
    }

    getErrorMessage()
    {
        const errorMessage = cy.get('[data-testid="login-error-msg"]')
        return errorMessage
    }

}
export default LoginPage