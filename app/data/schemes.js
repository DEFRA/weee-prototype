const Scheme = require('./Scheme');


class Schemes{
    constructor(){
      this._schemes = [];
      this._schemes.push(new Scheme('WEE/KP3538PF/SCH - Accerio WEEE Scheme','WEE/KP3538PF/SCH'));
      this._schemes.push(new Scheme('WEE/MP3338PT/SCH - B2B Compliance','WEE/MP3338PT/SCH'));
      this._schemes.push(new Scheme('WEE/MP3038PL/SCH - B2BWEEE Scheme','WEE/MP3038PL/SCH'));
      this._schemes.push(new Scheme('WEE/UP3538PY/SCH - Comply Direct','WEE/UP3538PY/SCH'));
      this._schemes.push(new Scheme('WEE/UP3838PL/SCH - Ecosurety','WEE/UP3838PL/SCH'));
    }
  }
  
module.exports = Schemes;
