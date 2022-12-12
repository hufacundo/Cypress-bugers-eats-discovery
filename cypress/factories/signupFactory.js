var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '83123456789',
            address: {
                postalcode: '58043250', 
                street: 'Rua das Acácias',                             
                number: '100',
                details: 'Apto 1002',
                district: 'Miramar',
                city_state: 'João Pessoa/PB'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
            }

            return data
    }

}