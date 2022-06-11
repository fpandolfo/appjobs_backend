// /// <reference types="cypress" />
// import data from '../fixtures/wsmdata.json'
// const pure = require('pure-gen');
// pure.setLocale('pt_BR');
// let number = pure.random.number()



// Cypress.Commands.add('requestMovementWallet', (client) => {
//     cy.request({
//         method: 'POST',
//         url: '/wsm/v1/movement',
//         headers: {
//             'X-API-KEY': '6f524a581f92291cd7338cf0a0f2fa81e6452774fe18e9ad487bb92e0cc760fa'
//         },
//         body: {
//             "clientId": (client),
//             "document": (data.document1),
//             "originAttribute": (number),
//             "originId": (number),
//             "reason": (data.reason1),
//             "type": (data.type1),
//             "value": (data.value2),
//             "status": (data.status1)
//         }
//     }).then(res => console.log(res))

//         .as('response')
// })