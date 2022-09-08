const port = 8000;
const express =  require('express');
const {faker} = require("@faker-js/faker")

const app = express();

class User {
    constructor() {
        this._id = faker.random.numeric();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const newUser = new User();

class Company {
    constructor() {
        this._id = faker.random.numeric();
        this.name = faker.company.name();
        this.address = faker.address.streetAddress(); 
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zip = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
const newCompany = new Company();

app.get('/api/users/new', (req, resp) => {
    return resp.json({
        newUser
    })
})

app.get('/api/companies/new', (req, resp) => {
    return resp.json({
        newCompany
    })
})

app.get('/api/user/company', (req, resp) => {
    return resp.json({
        newUser,
        newCompany
    })
})

// leave at the bottom because server is not ready for request until routes are set up.
app.listen(port, ()=> {
    console.log('Listening on port', port);
});