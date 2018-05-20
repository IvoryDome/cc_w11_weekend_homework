const RecordCollector = function (name){
  this.name = name;
  this.funds = 0;
  this.record_collection = [];
}

RecordCollector.prototype.addFunds = function (funds) {
  this.funds += funds;
};

RecordCollector.prototype.removeFunds = function (funds) {
  this.funds -= funds;
};


RecordCollector.prototype.addRecord = function (record) {
  this.record_collection.push(record);
};

RecordCollector.prototype.findRecordByTitle = function (title) {
  const recordToFind = this.record_collection.filter(record => record.title === title);
  return recordToFind[0];
};

RecordCollector.prototype.removeRecord = function (record) {
  let index = this.record_collection.indexOf(record);
  this.record_collection.splice(index, 1);
};

RecordCollector.prototype.buyRecord = function (record) {
  if (this.funds >= record.price){
    this.addRecord(record)};
    this.removeFunds(record.price);
};

RecordCollector.prototype.sellRecord = function (record) {
  this.addFunds(record.price);
  this.removeRecord(record);
};



module.exports = RecordCollector;
