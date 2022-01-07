const Address = require('./address');

class Facility{

    constructor(name, id, approvalNumber){
        this._name = name;
        this._id = id;
        this._approvalNumber = approvalNumber;
        this._pcs = [];
        this._reusedSites = [];
        this._hasEnteredData = false;
        this._hasBeenUploaded = false;
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