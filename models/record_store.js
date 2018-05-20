const RecordStore = function (name){
  this.name = name;
  this.funds = 0;
  this.record_collection = [];
}


RecordStore.prototype.addFunds = function (funds) {
  this.funds += funds;
};


RecordStore.prototype.addRecord = function (record) {
  this.record_collection.push(record);
};

RecordStore.prototype.removeRecord = function (record) {
  this.record_collection.
};





module.exports = RecordStore;
