module.exports = function () {
    var faker = require("faker");
    var lodash = require("lodash");

    return {
        contacts: lodash.times(100, function (n) {
            return {
                name: faker.name.findName(),
                number: faker.phone.phoneNumberFormat(n),
                avatar: faker.internet.avatar(),
                email: faker.internet.email()
            }
        })
    }
}