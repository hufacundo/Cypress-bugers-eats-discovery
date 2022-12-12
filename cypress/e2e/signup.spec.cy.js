/// <reference types="cypress" />
import signup from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'
import SignupPage from '../pages/SignupPage'




describe('Signup', () => {

    //beforeEach(function() {
    //    cy.fixture('deliver').then((d)=>{
    //      this.deliver = d
    //    })
    //})

    it('User should be deliver ', function () {
//Cenário feliz, onde tudo esta correto
        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Incorect document', function () {
//Cenário de CPF incorreto
        var deliver = signupFactory.deliver()

        deliver.cpf = '123456789aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorect email', function () {
//Cenário de Email incorreto
        var deliver = signupFactory.deliver()

        deliver.email = 'gui.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            SignupPage.go()
            SignupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })

    })

})

//Foi apagado as duas massas de testes, pois estão la no Fixtures, pa pasta DELIVER.JSON

/*before(function(){
       cy.log('Tudo aqui é executado uma única vez ANTES TODOS os casos de testes')
   })*/

/*after(function(){
    cy.log('Tudo aqui é executado uma única vez DEPOIS TODOS os casos de testes')
})*/

/*beforeEach(function(){
    cy.log('Tudo aqui é executado sempre para sempre ANTES de CADA caso de testes')
})*/

/*afterEach(function(){
    cy.log('Tudo aqui é executado sempre para sempre DEPOIS de CADA caso de testes')
})*/