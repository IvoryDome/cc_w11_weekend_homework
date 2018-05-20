const Record = require('../record.js');
const assert = require('assert');

describe('Record', function () {
  let recordStore;

  beforeEach(function () {
      recordStore = new RecordStore("Jim\'s Record Store")
    });
  });

  it ('should start with no funds'), function() {
    assert.strictEqual(recordStore.record_collection, []);
  }


  it ('should be able to add funds'), function() {

  }

  it ('should be able to remove funds'), function(){

  }

  it ('it should start with an empty collection of records'), function(){

  }

  it ('it should be able to add a record to it\'s collection'), function(){

  }

  it ('it should be able to find a record by title'), function(){

  }

  it ('it should be able to remove a record from it\'s collection'), function(){

  }

  it ('it should be able to buy a record if it has enough funds'), function(){

  }

  it ('it should be able to sell a record if it has the record'), function(){

  }
