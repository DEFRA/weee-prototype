
class TransferAatfCategory{
    constructor(category, receivedTonnage, reusedTonnage){
        this._receivedTonnage = receivedTonnage;
        this._reusedTonnage = reusedTonnage;
        this._transferReceivedTonnage = 0;
        this._transferReusedTonnage = 0;
        this._category = category;
    }
  }
  
module.exports = TransferAatfCategory;
