const assert = require('chai').assert;
// const task1 = require('../task1');
// const task3 = require('../task3');

describe('Task2', function(){
    it('Task2_subTask1 should return True', function(){
        let result = require('../dbTask2').subTask1;
        assert.equal(result, 'True');
    });
    it('Task2_subTask2 should return True', function(){
        let result = require('../dbTask2').subTask2;
        assert.equal(result, 'True');
    });
});