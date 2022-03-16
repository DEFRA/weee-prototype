class TransferNote{
    constructor(id, aatfData, status, complianceYear) {
        this._id = id;
        this._aatfData = aatfData;
        this._status = status;
        this._complianceYear = complianceYear;
        this._typeOfWaste = "Household";
		this._startDate = '12/01/2022';
		this._endDate = '15/02/2022';
    }
  }
  
module.exports = TransferNote;