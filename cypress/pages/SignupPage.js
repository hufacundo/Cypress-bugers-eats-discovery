

class SignupPage{

    go(){
        cy.visit('/')//acessa a pagina principal alvo do teste

        cy.get('a[href="/deliver"]').click()//função get com subfunção click passando botão para cadastrar entregas
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)//preencher nome
        cy.get('input[name="cpf"]').type(deliver.cpf)//preencher cpf
        cy.get('input[name="email"]').type(deliver.email)//preencher email
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)//preencher telefone

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)//colocar cep
        cy.get('input[type=button][value="Buscar CEP"]').click()//clicar o botão CEP
        
        cy.get('input[name="address-number"]').type(deliver.address.number)//preencher email
        cy.get('input[name="address-details"]').type(deliver.address.details)//preencher complemento

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
        
        cy.contains('.delivery-method li', deliver.delivery_method).click()//juntar localizador css com texto
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)//menssagem de finalização de cadastro
    }

    alertMessageShouldBe(expectedMessage) {
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

}


export default new SignupPage;