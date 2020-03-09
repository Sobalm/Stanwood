class MainPage{

    getCategories()
    {
        const categories = cy.get('.d-flex.w-100')
        return categories
    }

    getAllProductForFirstCategory()
    {
        const products = cy.get('.container-fluid')
        return products
    }

    getLogInButton()
    {
        const loginButton = cy.get('[data-testid="login-btn"]')
        return loginButton   
    }

}

export default MainPage