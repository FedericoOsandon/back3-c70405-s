import { Router } from 'express';
import { fork } from 'node:child_process'
import { faker } from '@faker-js/faker'


const router = Router()

const generateProducts = () => { 
    return {
        title: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        departament: faker.commerce.department(),
        stock: parseInt(faker.string.numeric()),
        id: faker.database.mongodbObjectId(),
        thumbnail: faker.image.url()
    }
}

const genateUsers = () => {
    const carts = []
    let numberOfProducts = parseInt(faker.string.numeric(1, {bannedDigits: '0'} ))

    for (let i = 0; i < numberOfProducts; i++) {
        carts.push(generateProducts())        
    }

    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        image: faker.image.avatar(),
        id: faker.database.mongodbObjectId(),
        carts
    }
}


router.get('/users', (req, res) => {
    const users = []

    for (let i = 0; i < 50; i++) {
       users.push(genateUsers())
        
    }

    res.send({satus: 'success', users})
})

// // config los endpoint
// function operacionCompleja() {
//     let result = 0
//     for (let i = 0; i < 10e10; i++) {
//         result += i        
//     }
//     return result
// }

// router.get('/block', (req, res) => {
//     const result = operacionCompleja()
//     res.send(`El resultado es: ${result}`)
// })
// router.get('/noblock', (req, res) => {
//     const child = fork('./src/routes/operacionCompleja.js')
//     child.send('inicia el proceso')
//     child.on('message', result => {
//         res.send(`El resultado es: ${result}`)
        
//     })
// })

export default router;

// js  single thread