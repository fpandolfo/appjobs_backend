///<reference types="cypress"/>
import data from '../../fixtures/jobsdata.json'

describe('OMNI - App Jobs', () => {

    describe('Addressing Controller', () => {

        describe('PUT Requests', () => {

        })
    })

    describe('Order Controller', () => {

        describe('GET Requests', () => {

            it('Find an order with valid params - 200', () => {
                const ecommerceId = '59757799';
                const subsidiaryId = '04%200139';
                const typeSearch = 'ECOMMERCE';
    
                cy.request({
                    method: 'GET',
                    url: `/omni/v1/orders?subsidiaryId=${subsidiaryId}&typeSearch=${typeSearch}&value=${ecommerceId}`,
    
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body[0]).to.have.property('ecommerce', ecommerceId)  // access the first object in the array to check if the ecommerce is the same
                    cy.log('Response time: ' + res.duration)
                })
            })
    
            it('Find an order with an invalid typeSearch - 400', () => {
                const ecommerceId = '59757799';
                const subsidiaryId = '04%200139';
                const typeSearch = 'TESTE';                                         // search with an invalid typeSearch
    
                cy.request({
                    method: 'GET',
                    url: `/omni/v1/orders?subsidiaryId=${subsidiaryId}&typeSearch=${typeSearch}&value=${ecommerceId}`,
                    failOnStatusCode: false,
    
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(400)                             // search with an invalid typeSearch
                    expect(res.body[0]).to.have.property('code')
                    expect(res.body[0]).to.have.property('message')
                    expect(res.body[0]).to.have.property('details')
                    expect(res.body[0]).to.have.property('date')
                    cy.log('Response time: ' + res.duration)
                    cy.log('Response code: ' + res.body[0].code)
                })
            })
    
            it('Find an order with an inexistent ecommerce order - 404', () => {  // **** NESSE CASO O JSON ESTA COM UMA ESTRUTURA DIFERENTE, NAO VEIO O ARRAY, APENAS O OBJETO ****
                const ecommerceId = '999999999';
                const subsidiaryId = '04%200139';
                const typeSearch = 'ECOMMERCE';                                         // The request resource was not found search
    
                cy.request({
                    method: 'GET',
                    url: `/omni/v1/orders?subsidiaryId=${subsidiaryId}&typeSearch=${typeSearch}&value=${ecommerceId}`,
                    failOnStatusCode: false,
                    timeout: 100000,
    
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(404)                             // The request resource was not found
                    expect(res.body).to.have.property('code')
                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('details')
                    expect(res.body).to.have.property('date')
                    cy.log('Response time: ' + res.duration)
                    cy.log('Response code: ' + res.body.code)
                })
            })
        })

        describe('PUT Requests', () => {

            it('Update an valid order - 200', () => {

                const orderId = '016757';
                const subsidiaryId = '04%200108';
    
                cy.request({
                    method: 'PUT',
                    url: `/omni/v1/orders/${orderId}/subsidiary/${subsidiaryId}`,
                    failOnStatusCode: false,
                    body: {
                        "status": 'DELIVERED',
                    }
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).to.have.property('code')
                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('success')
                    cy.log('Response time: ' + res.duration)
                    cy.log('Response code: ' + res.body.code)
                })
            })
    
            it('Update an order with wrong status - 400', () => { // **** NESSE CASO O JSON ESTA COM UMA ESTRUTURA DIFERENTE, VEIO O ARRAY
    
                const orderId = '78787878';
                const subsidiaryId = '04%200108';
    
                cy.request({
                    method: 'PUT',
                    url: `/omni/v1/orders/${orderId}/subsidiary/${subsidiaryId}`,
                    failOnStatusCode: false,
                    body: {
                        "status": 'NODS',                                                 // wrong status
                    }
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(400)
                    expect(res.body[0]).to.have.property('code')
                    expect(res.body[0]).to.have.property('date')
                    expect(res.body[0]).to.have.property('details')
                    expect(res.body[0]).to.have.property('message')
                    cy.log('Response time: ' + res.duration)
                    cy.log('Response code: ' + res.body[0].code)
                })
            })

            it('Update an inexistent order - 403', () => {
    
                const orderId = '78787878';
                const subsidiaryId = '04%200108';
    
                cy.request({
                    method: 'PUT',
                    url: `/omni/v1/orders/${orderId}/subsidiary/${subsidiaryId}`,
                    failOnStatusCode: false,
                    body: {
                        "status": 'DELIVERED',
                    }
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(403)
                    expect(res.body).to.have.property('code')
                    expect(res.body).to.have.property('date')
                    expect(res.body).to.have.property('details')
                    expect(res.body).to.have.property('message')
                    cy.log('Response time: ' + res.duration)
                    cy.log('Response code: ' + res.body.code)
                })
            })
        })
    })

    describe('Order Delivery Controller', () => {

        describe('GET Requests', () => {

            it('Find an order with valid params - 200', () => {
                const ecommerceId = '60630265';
                const subsidiaryId = '04%200169';
    
                cy.request({
                    method: 'GET',
                    url: `/omni/v1/order-delivery/${ecommerceId}/subsidiary/${subsidiaryId}`,
                    timeout: 100000,
    
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(200)
    
                    cy.get(res.body.orders).each((item) => {            // iterate trough the array of orders
                        if (item.ecommerce === ecommerceId) {           // check if the ecommerce is the same as the search parameter in each order
                            expect(item.ecommerce).to.equal(ecommerceId)// asserts if the ecommerce is the same as the search parameter to verify
                            expect(item).to.have.property('route')       // asserts if the order has the id property
                            expect(item).to.have.property('subsidiaryId')       // asserts if the order has the id property
                            expect(item).to.have.property('id')       // asserts if the order has the id property
                            expect(item).to.have.property('status')       // asserts if the order has the id property
                            expect(item).to.have.property('receiver')       // asserts if the order has the id property
                            expect(item).to.have.property('packages')       // asserts if the order has the id property
                            cy.log('Response time: ' + res.duration)
                        }
                       })
                })
            })
    
            it('Find an order with an inexistent ecommerce order - 404', () => {
                const ecommerceId = '999999999';
                const subsidiaryId = '04%200169';
    
                cy.request({
                    method: 'GET',
                    url: `/omni/v1/order-delivery/${ecommerceId}/subsidiary/${subsidiaryId}`,
                    failOnStatusCode: false,
                    timeout: 100000,
    
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(404)
                    expect(res.body).to.have.property('code')
                    expect(res.body).to.have.property('message')
                    expect(res.body).to.have.property('details')
                    expect(res.body).to.have.property('date')
                    cy.log('Response time: ' + res.duration)
                    cy.log('Response code: ' + res.body.code)
                })
            })
        })

        describe('PUT Requests', () => {

            it('Update an valid order delivery with correct params - 200', () => {
    
                const orderId = '60630265';
                const subsidiaryId = '04%200169';
                const route = 'r-shiinc-776635';
    
                cy.request({
                    method: 'PUT',
                    url: `/omni/v1/order-delivery/subsidiary/${subsidiaryId}`,
                    failOnStatusCode: false,
                    body: {
                        "orders": [
                            `${orderId}`
                        ],
                        "route": `${route}`,
                        "status": 'DELIVERED'
                    }
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(200)
                    // expect(res.body).to.have.property('code')
                    // expect(res.body).to.have.property('date')
                    // expect(res.body).to.have.property('details')
                    // expect(res.body).to.have.property('message')
                    cy.log('Response time: ' + res.duration)
                    cy.log('Response code: ' + res.body.code)
                })
            })

            it('Update an valid order delivery with wrong status - 400', () => { // **** NESSE CASO O JSON ESTA COM UMA ESTRUTURA DIFERENTE, VEIO O ARRAY
    
                const orderId = '60630265';
                const subsidiaryId = '04%200169';
                const route = 'r-shiinc-776635';
    
                cy.request({
                    method: 'PUT',
                    url: `/omni//v1/order-delivery/subsidiary/${subsidiaryId}`,
                    failOnStatusCode: false,
                    body: {
                        "orders": [
                            `${orderId}`
                        ],
                        "route": `${route}`,
                        "status": 'NODS'                           // incorrect status
                    }
                }).then(res => console.log(res))
    
                    .as('response')
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(400)
                    expect(res.body[0]).to.have.property('code')
                    expect(res.body[0]).to.have.property('date')
                    expect(res.body[0]).to.have.property('details')
                    expect(res.body[0]).to.have.property('message')
                    cy.log('Response time: ' + res.duration)
                    cy.log('Response code: ' + res.body[0].code)
                })
            })

            // it('Update an valid order delivery with invalid order - 40X', () => {   ** PROTHEUS RETORNA 201 MESMO QUANDO PASSANDO UM ID INEXISTENTE E UMA ROTA INEXISTENTE, VALIDAR ESSES RETORNOS PARA O TESTE
    
            //     const orderId = '60630265';
            //     const subsidiaryId = '04%200169';
            //     const route = 'r-shiinc-776635';
    
            //     cy.request({
            //         method: 'PUT',
            //         url: `/omni//v1/order-delivery/subsidiary/${subsidiaryId}`,
            //         failOnStatusCode: false,
            //         body: {
            //             "orders": [
            //                 `${orderId}`
            //             ],
            //             "route": `${route}`,
            //             "status": 'DELIVERED'
            //         }
            //     }).then(res => console.log(res))
    
            //         .as('response')
    
            //     cy.get('@response').then(res => {
            //         expect(res.status).to.be.equal(400)
            //         expect(res.body).to.have.property('code')
            //         expect(res.body).to.have.property('date')
            //         expect(res.body).to.have.property('details')
            //         expect(res.body).to.have.property('message')
            //         cy.log('Response time: ' + res.duration)
            //     })
            // })
        })
    })
})
