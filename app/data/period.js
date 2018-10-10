const Facility = require('./facility');
const Operator = require('./operator');

class Period{
    constructor(name){
        this._name = name;
        this._facilities = [];
        this._facilities.push(new Facility('ABB Ltd Darlaston', 1, 'WEE/AB1234GH/ATF'));
        this._facilities.push(new Facility('ABB Ltd Woking', 2, 'WEE/AB1234GH/ATF'));
        this._facilities.push(new Facility('ABB Ltd Maidenhead', 3, 'WEE/AB1234GH/ATF'));

        this._operator = new Operator('Abb Ltd', 1, 'WEE/AB1234GH/ATF', '1 Stratford Avenue', 'Hammersmith', 'United Kingdom', 'W4 5YH');
    }
}
  
module.exports = Period;