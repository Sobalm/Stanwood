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

    }

    fillPhone(value)
    {

    }

}