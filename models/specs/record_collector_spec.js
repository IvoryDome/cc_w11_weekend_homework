const Record = require('../record.js');
const RecordCollector = require('../record_collector.js')
const assert = require('assert');

describe('RecordCollector', function () {
  let record;
  let recordCollector;

  beforeEach(function () {
    recordCollector = new RecordCollector('Dr Dre');
    record = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
  });

  it ('should start with no funds', function() {
    assert.strictEqual(recordCollector.funds, 0);
  });


  it ('should be able to add funds', function() {
    recordCollector.addFunds(50);
    assert.strictEqual(recordCollector.funds, 50);
  });

  it ('should be able to remove funds', function(){
    recordCollector.addFunds(50);
    recordCollector.removeFunds(25);
    assert.strictEqual(recordCollector.funds, 25);
  });

  it ('it should start with an empty collection of records', function(){
    assert.strictEqual(recordCollector.record_collection.length, 0);
  });

  it ('it should be able to add a record to it\'s collection', function(){
    recordCollector.addRecord(record);
    assert.strictEqual(recordCollector.record_collection.length, 1);
  });

  it ('it should be able to find a record by title', function(){
    recordCollector.addRecord(record);
    result = recordCollector.findRecordByTitle('Their Greatest Hits 1971 - 1975');
    assert.strictEqual(result, record);
  });

  it ('it should be able to remove a record from it\'s collection', function(){
    recordCollector.addRecord(record);
    recordCollector.addRecord(record);
    recordCollector.removeRecord(record);
    assert.strictEqual(recordCollector.record_collection.length, 1);
  });

  it ('it should be able to buy a record if it has enough funds', function(){
    recordCollector.addFunds(1500);
    recordCollector.buyRecord(record);
    assert.strictEqual(recordCollector.record_collection.length, 1);
    assert.strictEqual(recordCollector.funds, 500);
  });

  it ('it should be able to sell a record if it has the record', function(){
    recordCollector.addRecord(record);
    recordCollector.sellRecord(record);
    assert.strictEqual(recordCollector.record_collection.length, 0);
    assert.strictEqual(recordCollector.funds, 1000);
  });
});
