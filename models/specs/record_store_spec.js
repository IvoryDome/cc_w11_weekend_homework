const Record = require('../record.js');
const RecordStore = require('../record_store.js');
const assert = require('assert');

describe('RecordStore', function () {
  let recordStore;
  let record;

  beforeEach(function () {
    recordStore = new RecordStore("Jim\'s Record Store");
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
  });


  it('should have a name', function() {
    assert.strictEqual(recordStore.name, "Jim\'s Record Store")
  });


  it('should start with no funds', function() {
    assert.strictEqual(recordStore.funds, 0);
  });

  it('should be able to add funds', function(){
    recordStore.addFunds(50);
    assert.strictEqual(recordStore.funds, 50);
  });

  it('should start with an empty collection of records', function(){
    assert.strictEqual(recordStore.record_collection.length, 0);
  });

  it('should be able to add a record to its stock', function(){
    recordStore.addRecord(record);
    assert.strictEqual(recordStore.record_collection.length, 1);
  });

  it('should be able to remove a record from its stock', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record);
    recordStore.removeRecord(record);
    assert.strictEqual(recordStore.record_collection.length, 1);
  });

  it('should be able to sell a record if it has the record', function(){
    recordStore.addRecord(record);
    recordStore.sellRecord(record);
    assert.strictEqual(recordStore.record_collection.length, 0);
    assert.strictEqual(recordStore.funds, 1000);
  });

});
