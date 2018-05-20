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
  let index = this.record_collection.indexOf(record);
  this.record_collection.splice(index, 1);

};

RecordStore.prototype.sellRecord = function (record) {
  this.addFunds(record.price);
  this.removeRecord(record);
};





module.exports = RecordStore;
