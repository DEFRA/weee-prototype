const Address = require('./address');

class Operator{
    constructor(name, id, approvalNumber, street, town, country, postcode){
        this._name = name;
        this._id = id;
        this._approvalNumber = approvalNumber;
        this._address = new Address(street, town, country, postcode);        
    }
}
  
module.exports = Operator;