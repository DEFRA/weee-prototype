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
     this._approvedDate = '-';
     this._submittedDate = '-';
     this._returnedDate = '-';
     this._rejectedDate = '-';
     this._createdDate = createdDate;
     this._sortOrder = 0;
     this._isVisible = false;
     this._isTransferred = false;
     this._dateTransferred = '21/03/2022 14:04:05';
    }
}

module.exports = EvidenceNote;
