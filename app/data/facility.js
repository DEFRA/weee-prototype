const Address = require('./address');

class Facility{

    constructor(name, id, approvalNumber){
        this._name = name;
        this._id = id;
        this._approvalNumber = approvalNumber;
       }

    /* constructor(name, id, approvalNumber, street, town, country, postcode){
     this._name = name;
     this._id = id;
     this._approvalNumber = approvalNumber;
     this._adress = new Address(street, town, country, postcode);
     this._schemes = [];
    } */
}
  
module.exports = Facility;