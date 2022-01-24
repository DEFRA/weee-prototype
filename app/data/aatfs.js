const AATF = require('./aatf');


class AATFs{
    constructor(){
      this._aatfs = [];
      this._aatfs.push(new AATF('Aqua Force Special Waste Ltd','WEE/CH0002ZS/ATF'));
      this._aatfs.push(new AATF('European Metal Recycling Limited (Liverpool Alexandra Dock)','WEE/JD0002ZS/ATF'));
      this._aatfs.push(new AATF('M.D.J. Light Brothers (Scrap Processers) Ltd - Units 18 & 19','WEE/YW0006ZT/ATF'));
    }
  }
  
module.exports = AATFs;
