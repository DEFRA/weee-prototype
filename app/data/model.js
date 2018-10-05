
class Scheme{
  constructor(name, id){
    this._name = name;
    this._id = id;
  }
}

class Facility{

  constructor(name, id){
   this._name = name;
   this._id = id;
   this._schemes = [];
  }
 }

module.exports = Scheme;
module.exports = Facility;