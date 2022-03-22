//const moment = require('./moment');

class TransferNote{
    constructor(id, aatfData, status, complianceYear) {
        this._id = id;
        this._aatfData = aatfData;
        this._status = status;
        this._complianceYear = complianceYear;
        this._typeOfWaste = "Household";
		this._submittedDate = '12/03/2022 11:05:01';
		this._startDate = '12/01/2022 11:05:01';
		this._endDate = '15/02/2022 11:05:01';
		this._transferDate = '15/02/2022 16:32:04';
    }
  }
  
module.exports = TransferNote;
