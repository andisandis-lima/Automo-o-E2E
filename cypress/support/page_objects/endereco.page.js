import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const street = faker.address.street()
const city = faker.address.city()
const zipCode = faker.address.zipCode('#####-###')
const telefone = faker.phone.number('+55 77 #####-####')
const email = faker.internet.email()

class Endereco {

    editarEndereco( ){
        cy.get('#billing_first_name').clear().type(firstName)
        cy.get('#billing_last_name').clear().type(lastName)
        cy.get('#billing_company').clear().type("EBAC")
        cy.get('#select2-billing_country-container').click().type('Brasil').get('[data-selected="true"]').click()
        //cy.get('select2-results__option select2-results__option--highlighted').click()
        cy.get('#billing_address_1').clear().type(street)
        cy.get('#billing_city').clear().type(city)
        cy.get('#select2-billing_state-container').click().type('Roraima').get('[data-selected="true"]').click()
        cy.get('#billing_postcode').clear().type(zipCode)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
    }
}

{/* <li class="select2-results__option select2-results__option--highlighted" id="select2-billing_country-result-ws7t-BR" 
role="option"
 data-selected="true" tabindex="-1" aria-selected="true">Brasil</li> */}

export default new Endereco()