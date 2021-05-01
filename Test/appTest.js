const assert = require('chai').assert;
// const task1 = require('../task1');
// const task3 = require('../task3');
const subTask1= require('../dbTask2');
const subTask2= require('../dbTask2').sum;
console.log(subTask1);
console.log(subTask2);
describe('Task2', function(){
    it("wholePopulation /"+subTask1+"/ should be lower than 2000000000", function(){
        let result = subTask1();
        assert.equal(result, 1);
    });
    it('sum should be lower than 50', function(){
        let result = subTask2;
        assert.equal(result, 50, result);
    });
});