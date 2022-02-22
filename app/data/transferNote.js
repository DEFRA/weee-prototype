class TransferNote{
    constructor(id, aatfData, status, complianceYear) {
        this._id = id;
        this._aatfData = aatfData;
        this._status = status;
        this._complianceYear = complianceYear;
        this._typeOfWaste = "Household"
    }
  }
  
module.exports = TransferNote;