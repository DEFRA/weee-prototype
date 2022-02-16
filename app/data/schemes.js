const Scheme = require('./scheme');


class Schemes{
    constructor(){
      this._schemes = [];
      this._schemes.push(new Scheme('All WEEE Compliance','WEE/KP3538PF/SCH'));
      this._schemes.push(new Scheme('B2B Compliance','WEE/MP3338PT/SCH'));
      this._schemes.push(new Scheme('B2BWEEE-SCHEME','WEE/MP3038PL/SCH'));
      this._schemes.push(new Scheme('Comply Direct','WEE/UP3538PY/SCH'));
      this._schemes.push(new Scheme('Comply with Clarity','WEE/XP3538PP/SCH'));
      this._schemes.push(new Scheme('Ecosurety','WEE/UP3838PL/SCH'));
      this._schemes.push(new Scheme('Electrolink','WEE/MP3138PU/SCH'));
      this._schemes.push(new Scheme('ERP UK','WEE/XP3338PD/SCH'));
      this._schemes.push(new Scheme('Interlevin','WEE/GP3138PQ/SCH'));
      this._schemes.push(new Scheme('Lumicom Compliance Scheme','WEE/XP3138PV/SCH'));
      this._schemes.push(new Scheme('Nilwaste','WEE/XP3638PJ/SCH'));
      this._schemes.push(new Scheme('Northern Compliance Limited','WEE/UP3438PR/SCH'));
      this._schemes.push(new Scheme('PV CYCLE UK','WEE/TP3838PS/SCH'));
      this._schemes.push(new Scheme('Recolight','WEE/MP3838PR/SCH'));
      this._schemes.push(new Scheme('Recycle Telecom Producer Compliance Scheme','WEE/GP3538PG/SCH'));
      this._schemes.push(new Scheme('Recycling Lives Compliance Services Limited','WEE/XP3838PX/SCH'));
      this._schemes.push(new Scheme('RENE AG','WEE/XP3038PN/SCH'));
      this._schemes.push(new Scheme('REPIC','WEE/MP3638PE/SCH'));
      this._schemes.push(new Scheme('Repscot Ltd','WEE/TP3338/PV/SCH'));
      this._schemes.push(new Scheme('RTB WEEE Compliance','WEE/MP3938PY/SCH'));
      this._schemes.push(new Scheme('Smart Comply (EA)','WEE/TP3538PD/SCH'));
      this._schemes.push(new Scheme('Transform','WEE/MP3238PG/SCH'));
      this._schemes.push(new Scheme('Valpak','WEE/MP3438PF/SCH'));
      this._schemes.push(new Scheme('Valpak Scotland Limited','WEE/KP3838PW/SCH'));
      this._schemes.push(new Scheme('Veolia ES WEEE Compliance Scheme (UK) Ltd','WEE/GP3038PY/SCH'));
      this._schemes.push(new Scheme('Waste Electrical Recycling Compliance Scheme','WEE/KP3638PZ/SCH'));
      this._schemes.push(new Scheme('WE3 Compliance','WEE/GP3839PE/SCH'));
      this._schemes.push(new Scheme('WEEE 3R Ltd','WEE/TP3938PM/SCH'));
      this._schemes.push(new Scheme('WEEE Link','WEE/UP3338PW/SCH'));
      this._schemes.push(new Scheme('WEEECare','WEE/MP3538PZ/SCH'));
      this._schemes.push(new Scheme('WEEEComply','WEE/GP3338PL/SCH'));
      this._schemes.push(new Scheme('WEEELight','WEE/KP3238PU/SCH'));
    }
  }
  
module.exports = Schemes;
