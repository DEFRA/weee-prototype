const Categories = require('./categories');

class EvidenceNote{
    constructor(startDate, endDate, pcs, year, wasteType, protocol, received, reused, status, reference, createdDate){
     this._startDate = startDate;
     this._endDate = endDate;
     this._pcs = pcs;
     this._year = year;
     this._wasteType = wasteType;
     this._protocol = protocol;
     this._received = received;
     this._reused = reused;
     this._status = status;
     this._reference = reference;
     this._submittedDate = '-';
     this._createdDate = createdDate;
	 this._sortOrder = 0;
	 this._isVisible = false;
    }
}

module.exports = EvidenceNote;
