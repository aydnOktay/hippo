const contactModel = require("./contact.model");
const BaseService = require("../base/base.service");

class ContactService extends BaseService {
    constructor(){
        super(contactModel);
    }
}

module.exports = new ContactService();