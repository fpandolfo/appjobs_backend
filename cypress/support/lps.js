/// <reference types="cypress" />
import data from '../fixtures/jobsdata.json'
const pure = require('pure-gen');
pure.setLocale('pt_BR');
let number = pure.random.number()

Cypress.Commands.add('postDefaultTierTrue', () => {

    cy.request({
        method: 'POST',
        url: '/lps-tier/tiers',
        failOnStatusCode: false,
        body: {
            "active": true,
            "badge": (data.badge),
            "defaultTier": true,
            "description": (data.reason8),
            "maxSpend": (number+1),
            "minSpend": (number),
            "name": (data.name),
            "nextTierId": (number),
            "servicesAvailable": 10,
            "tierKey": (number+1)
        }
     }).then((res) => {

         return res.body.id
        
    })
})

Cypress.Commands.add('postDefaultTierFalse', () => {

cy.request({
    method: 'POST',
    url: '/lps-tier/tiers',
    failOnStatusCode: false,
    body: {
        "active": true,
        "badge": (data.badge),
        "defaultTier": false,
        "description": (data.reason8),
        "maxSpend": (number+4),
        "minSpend": (number+3),
        "name": (data.name),
        "nextTierId": (number),
        "servicesAvailable": 10,
        "tierKey": (number)
    }
}).then((res) => {

    return res.body.id,
    res.body.tierKey

    

    })
})