///<reference types="cypress"/>
import data from '../../fixtures/jobsdata.json'

describe('WSM - Wallet Service Management', () => {

    describe('WSM - Add Movement', () => {

        it('Validar o método POST informando dados válidos para realização de uma movimentação de Crédito com status AVAILABLE de MGM (WSM) - 201', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()
            // cy.requestMovementWallet(data.clientId1)
            // cy.responseMovementWallet(data.reason1)
            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": (number),
                    "originId": (number),
                    "reason": (data.reason1),
                    "type": (data.type1),
                    "value": (data.value2),
                    "status": (data.status1)
                }
            }).then(res => console.log(res))

                .as('response')


            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.statusText).to.be.equal('Created')
                expect(res.body).to.have.property('createDate')
                expect(res.body).to.have.property('expirationDate')
                expect(res.body).to.have.property('description')
                expect(res.body).to.have.property('originAttribute')
                expect(res.body).to.have.property('originId')
                expect(res.body).to.have.property('reason', data.reason1)
                expect(res.body).to.have.property('status', data.status1)
                expect(res.body).to.have.property('type', data.type1)
                expect(res.body).to.have.property('value', data.value2)
            })
        })

        it('Validar o método POST informando dados válidos para realização de uma movimentação de Crédito com status PENDING de MGM (WSM) - 201', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "daysToExpire": ("20"),
                    "daysToRelease": ("10"),
                    "document": (data.document1),
                    "originAttribute": (number),
                    "originId": (number),
                    "reason": (data.reason1),
                    "type": (data.type1),
                    "value": (data.value2),
                    "status": (data.status2)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.statusText).to.be.equal('Created')
                expect(res.body).to.have.property('createDate')
                expect(res.body).to.have.property('expirationDate')
                expect(res.body).to.have.property('description')
                expect(res.body).to.have.property('originAttribute')
                expect(res.body).to.have.property('originId')
                expect(res.body).to.have.property('reason', data.reason1)
                expect(res.body).to.have.property('status', data.status2)
                expect(res.body).to.have.property('type', data.type1)
                expect(res.body).to.have.property('value', data.value2)
            })
        })

        it('Validar o método POST informando dados válidos para realização de uma movimentação de Crédito com status AVAILABLE de CASHBACK (WSM) - 201', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": (number),
                    "originId": (number),
                    "reason": (data.reason2),
                    "type": (data.type1),
                    "value": (data.value2),
                    "status": (data.status1)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.statusText).to.be.equal('Created')
                expect(res.body).to.have.property('createDate')
                expect(res.body).to.have.property('expirationDate')
                expect(res.body).to.have.property('description')
                expect(res.body).to.have.property('originAttribute')
                expect(res.body).to.have.property('originId')
                expect(res.body).to.have.property('reason', data.reason2)
                expect(res.body).to.have.property('status', data.status1)
                expect(res.body).to.have.property('type', data.type1)
                expect(res.body).to.have.property('value', data.value2)
            })
        })

        it('Validar o método POST informando dados válidos para realização de uma movimentação de Crédito com status PENDING de CASHBACK (WSM) - 201', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "daysToExpire": ("20"),
                    "daysToRelease": ("10"),
                    "document": (data.document1),
                    "originAttribute": (number),
                    "originId": (number),
                    "reason": (data.reason2),
                    "type": (data.type1),
                    "value": (data.value2),
                    "status": (data.status2)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.statusText).to.be.equal('Created')
                expect(res.body).to.have.property('createDate')
                expect(res.body).to.have.property('expirationDate')
                expect(res.body).to.have.property('description')
                expect(res.body).to.have.property('originAttribute')
                expect(res.body).to.have.property('originId')
                expect(res.body).to.have.property('reason', data.reason2)
                expect(res.body).to.have.property('status', data.status2)
                expect(res.body).to.have.property('type', data.type1)
                expect(res.body).to.have.property('value', data.value2)
            })
        })

        it('Validar o método POST informando dados válidos para realização de uma movimentação de Débito de MGM (WSM) - 201', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "reason": (data.reason1),
                    "type": (data.type2),
                    "value": (data.value1),
                    "status": (data.status3)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.statusText).to.be.equal('Created')
                expect(res.body).to.have.property('createDate')
                expect(res.body).to.have.property('expirationDate')
                expect(res.body).to.have.property('releaseDate')
                expect(res.body).to.have.property('description')
                expect(res.body).to.have.property('reason', data.reason1)
                expect(res.body).to.have.property('status', data.status3)
                expect(res.body).to.have.property('originId', 'L' + number)
                expect(res.body).to.have.property('originAttribute', 'L' + number)
                expect(res.body).to.have.property('type', data.type2)
                expect(res.body).to.have.property('value', data.value1 * -1)
            })
        })

        it('Validar o método POST informando dados válidos para realização de uma movimentação de Débito CASHBACK (WSM) - 201', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "reason": (data.reason2),
                    "type": (data.type2),
                    "value": (data.value1),
                    "status": (data.status3)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.statusText).to.be.equal('Created')
                expect(res.body).to.have.property('createDate')
                expect(res.body).to.have.property('expirationDate')
                expect(res.body).to.have.property('releaseDate')
                expect(res.body).to.have.property('description')
                expect(res.body).to.have.property('reason', data.reason2)
                expect(res.body).to.have.property('status', data.status3)
                expect(res.body).to.have.property('type', data.type2)
                expect(res.body).to.have.property('value', data.value1 * -1)
                expect(res.body).to.have.property('originId', 'L' + number)
                expect(res.body).to.have.property('originAttribute', 'L' + number)

            })
        })

        it('Validar o método POST utilizando credito com status pendente (WSM) - 400', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "document": (number),
                    "daysToExpire": ("20"),
                    "daysToRelease": ("10"),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "reason": (data.reason2),
                    "type": (data.type1),
                    "value": (data.value1),
                    "status": (data.status2)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.statusText).to.be.equal('Created')
                expect(res.body).to.have.property('createDate')
                expect(res.body).to.have.property('expirationDate')
                expect(res.body).to.have.property('releaseDate')
                expect(res.body).to.have.property('description')
                expect(res.body).to.have.property('reason', data.reason2)
                expect(res.body).to.have.property('status', data.status2)
                expect(res.body).to.have.property('type', data.type1)
                expect(res.body).to.have.property('value', data.value1)
                expect(res.body).to.have.property('originId', 'L' + number)
                expect(res.body).to.have.property('originAttribute', 'L' + number)

            })

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                failOnStatusCode: false,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "document": (number),
                    "daysToExpire": ("20"),
                    "daysToRelease": ("10"),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "reason": (data.reason2),
                    "type": (data.type2),
                    "value": (data.value1),
                    "status": (data.status3)
                }




            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(422)
                expect(res.body).to.have.property('code', -11001)
                expect(res.statusText).to.be.equal('Unprocessable Entity')
                expect(res.body).to.have.property('description', 'Insufficient balance for processing the request.')
            })
        })

        it('Validar o método POST informando um "document" nulo/zero para realização de uma movimentação (WSM) - 400', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                failOnStatusCode: false,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document3),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "reason": (data.reason1),
                    "type": (data.type1),
                    "value": (data.value1),
                    "status": (data.status1)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(400)
                expect(res.statusText).to.be.equal('Bad Request')
                expect(res.body).to.have.property('code', -61)
                expect(res.body).to.have.property('description', "It is necessary to inform the client's document for movement.")
            })
        })

        it('Validar o método POST informando payload já utilizado para realização de uma movimentação (WSM) - 400', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                failOnStatusCode: false,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "reason": (data.reason1),
                    "type": (data.type1),
                    "value": (data.value1),
                    "status": (data.status1)
                },




            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)

            })

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                failOnStatusCode: false,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "reason": (data.reason1),
                    "type": (data.type1),
                    "value": (data.value1),
                    "status": (data.status1)
                },




            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(400)
                expect(res.statusText).to.be.equal('Bad Request')
                expect(res.body).to.have.property('code', -1002)
                expect(res.body).to.have.property('description', 'There is already a movement for this origin id and attribute.')
            })
        })

        it('Validar o método POST informando um "Reason" inválido para realização de uma movimentação (WSM)', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                failOnStatusCode: false,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "reason": (data.reason8),
                    "type": (data.type1),
                    "value": (data.value1),
                    "status": (data.status1)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(400)
                expect(res.statusText).to.be.equal('Bad Request')
            })

        })

        it('Validar o método POST informando um "Type" inválido para realização de uma movimentação (WSM)', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                failOnStatusCode: false,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "status": (data.status1),
                    "reason": (data.reason1),
                    "type": (data.type6),
                    "value": (data.value1)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(400)
                expect(res.statusText).to.be.equal('Bad Request')


            })

        })

        it('Validar o método POST informando um "status" de crédito para uma movimentação de débito (WSM)', () => {
            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                failOnStatusCode: false,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (data.document1),
                    "originAttribute": ('L' + number),
                    "originId": ('L' + number),
                    "status": (data.status1),
                    "reason": (data.reason1),
                    "type": (data.type2),
                    "value": (data.value1)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(422)
                expect(res.body).to.have.property('code', -11003)
                expect(res.body).to.have.property('description', 'Invalid Status for movement type.')
            })

        })

    })

    describe('WSM - Balance', () => {

        it('Validar o método GET informando um documento que possua saldo positivo na Wallet (WSM)', () => {

            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (number),
                    "originAttribute": (number),
                    "originId": (number),
                    "reason": (data.reason1),
                    "type": (data.type1),
                    "value": (data.value2),
                    "status": (data.status1)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)

            })

            cy.request({
                method: 'GET',
                url: '/wsm/v1/balance/' + number,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },

            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(200)
                expect(res.body).to.have.property('document', number)
                expect(res.body).to.have.property('availableBalance', data.value2)
            })


        })
        it('Realizar GET validando consumo total de saldo na Wallet (WSM)', () => {

            const pure = require('pure-gen');
            pure.setLocale('pt_BR');
            let number = pure.random.number()

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (number),
                    "originAttribute": (number),
                    "originId": (number),
                    "reason": (data.reason1),
                    "type": (data.type1),
                    "value": (data.value2),
                    "status": (data.status1)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)

            })

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "document": (number),
                    "originAttribute": (number),
                    "originId": (number),
                    "reason": (data.reason1),
                    "type": (data.type2),
                    "value": (data.value2),
                    "status": (data.status3)
                }
            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)

            })

            cy.request({
                method: 'GET',
                url: '/wsm/v1/balance/' + number,
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },

            }).then(res => console.log(res))

                .as('response')
            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(200)
                expect(res.body).to.have.property('document', number)
                expect(res.body).to.have.property('availableBalance', 0)
                expect(res.body).to.have.property('totalSpending', data.value2 * -1)
            })


        })




    })

    // describe('WSM - Cancell Movement', () => {
      //  describe('WSM - Credit consumption priority', () => {

            it('Validar distribuicao de credito (WSM) - 201', () => {
                const pure = require('pure-gen');
                pure.setLocale('pt_BR');
                let number = pure.random.number()

                cy.request({
                    method: 'POST',
                    url: '/wsm/v1/movement',
                    headers: {
                        'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                    },
                    body: {
                        "clientId": (data.clientId1),
                        "daysToExpire":(90),
                        "daysToRelease":(10),
                        "document": (number),
                        "originAttribute": (number),
                        "originId": (number),
                        "reason": (data.reason1),
                        "type": (data.type1),
                        "value": (100),
                        "status": (data.status1)
                    }
                }).then(res => console.log(res))
    
                    .as('response')
    
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(201)
                    expect(res.statusText).to.be.equal('Created')
                    
                })

                cy.request({
                    method: 'POST',
                    url: '/wsm/v1/movement',
                    headers: {
                        'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                    },
                    body: {
                        "clientId": (data.clientId1),
                        "daysToExpire":(1),
                        "daysToRelease":(10),
                        "document": (number),
                        "originAttribute": (number+1),
                        "originId": (number+1),
                        "reason": (data.reason1),
                        "type": (data.type1),
                        "value": (500),
                        "status": (data.status2)
                    }
                }).then(res => console.log(res))
    
                    .as('response')
    
    
                cy.get('@response').then(res => {
                    expect(res.status).to.be.equal(201)
                    expect(res.statusText).to.be.equal('Created')
            })

            cy.request({
                method: 'POST',
                url: '/wsm/v1/movement',
                headers: {
                    'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
                },
                body: {
                    "clientId": (data.clientId1),
                    "daysToExpire":(1),
                    "daysToRelease":(10),
                    "document": (number),
                    "originAttribute": (number+2),
                    "originId": (number+2),
                    "reason": (data.reason1),
                    "type": (data.type1),
                    "value": (50),
                    "status": (data.status1)
                }
            }).then(res => console.log(res))

                .as('response')


            cy.get('@response').then(res => {
                expect(res.status).to.be.equal(201)
                expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(2),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number+3),
                "originId": (number+3),
                "reason": (data.reason1),
                "type": (data.type1),
                "value": (100),
                "status": (data.status1)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(3),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number+4),
                "originId": (number+4),
                "reason": (data.reason1),
                "type": (data.type1),
                "value": (10),
                "status": (data.status1)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(1),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+5),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (30),
                "status": (data.status3)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'GET',
            url: '/wsm/v1/balance/' + number,
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },

        }).then(res => console.log(res))

            .as('response')
        cy.get('@response').then(res => {
            //expect(res.status).to.be.equal(204)
            //expect(res.body).to.have.property('document', number)
            expect(res.body).to.have.property('availableBalance', 230.00)
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(1),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+6),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (30),
                "status": (data.status3)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'GET',
            url: '/wsm/v1/balance/' + number,
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },

        }).then(res => console.log(res))

            .as('response')
        cy.get('@response').then(res => {
            //expect(res.status).to.be.equal(204)
            //expect(res.body).to.have.property('document', number)
            expect(res.body).to.have.property('availableBalance', 200.00)
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(1),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+7),
                "reason": (data.reason1),
                "type": (data.type1),
                "value": (20),
                "status": (data.status1)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(1),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+8),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (10),
                "status": (data.status3)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'GET',
            url: '/wsm/v1/balance/' + number,
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },

        }).then(res => console.log(res))

            .as('response')
        cy.get('@response').then(res => {
            //expect(res.status).to.be.equal(204)
            //expect(res.body).to.have.property('document', number)
            expect(res.body).to.have.property('availableBalance', 210.00)
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(1),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+9),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (110),
                "status": (data.status3)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(5),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+10),
                "reason": (data.reason1),
                "type": (data.type1),
                "value": (100),
                "status": (data.status1)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(2),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+11),
                "reason": (data.reason1),
                "type": (data.type1),
                "value": (50),
                "status": (data.status1)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'GET',
            url: '/wsm/v1/balance/' + number,
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },

        }).then(res => console.log(res))

            .as('response')
        cy.get('@response').then(res => {
            //expect(res.status).to.be.equal(204)
            //expect(res.body).to.have.property('document', number)
            expect(res.body).to.have.property('availableBalance', 250.00)
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(2),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+12),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (60),
                "status": (data.status3)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            failOnStatusCode: false,
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(2),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+13),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (200.00),
                "status": (data.status3)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(422)
            expect(res.body).to.have.property('description', 'Insufficient balance for processing the request.')
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(2),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+14),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (190.00),
                "status": (data.status3)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
        })

        cy.request({
            method: 'GET',
            url: '/wsm/v1/balance/' + number,
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },

        }).then(res => console.log(res))

            .as('response')
        cy.get('@response').then(res => {
            //expect(res.status).to.be.equal(204)
            //expect(res.body).to.have.property('document', number)
            expect(res.body).to.have.property('availableBalance', 0.00)
        })

    })

    it('Validar estorno de debito', () => {
        const pure = require('pure-gen');
        pure.setLocale('pt_BR');
        let number = pure.random.number()

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(20),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number),
                "reason": (data.reason1),
                "type": (data.type1),
                "value": (15.00),
                "status": (data.status1)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
            
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "clientId": (data.clientId1),
                "daysToExpire":(2),
                "daysToRelease":(10),
                "document": (number),
                "originAttribute": (number),
                "originId": (number+1),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (15.00),
                "status": (data.status3)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.statusText).to.be.equal('Created')
            
        })

        cy.request({
            method: 'GET',
            url: '/wsm/v1/balance/' + number,
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },

        }).then(res => console.log(res))

            .as('response')
        cy.get('@response').then(res => {
            //expect(res.status).to.be.equal(204)
            //expect(res.body).to.have.property('document', number)
            expect(res.body).to.have.property('availableBalance', 0.00)
        })

        cy.request({
            method: 'POST',
            url: '/wsm/v1/movement/cancel',
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },
            body: {
                "document": (number),
                "originAttribute": (number),
                "originId": (number+1),
                "reason": (data.reason1),
                "type": (data.type2),
                "value": (15.00)
            }
        }).then(res => console.log(res))

            .as('response')


        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(200)
            
        })

        cy.request({
            method: 'GET',
            url: '/wsm/v1/balance/' + number,
            headers: {
                'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
            },

        }).then(res => console.log(res))

            .as('response')
        cy.get('@response').then(res => {
            //expect(res.status).to.be.equal(204)
            //expect(res.body).to.have.property('document', number)
            expect(res.body).to.have.property('availableBalance', 15.00)
        })
        
    })


})