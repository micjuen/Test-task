const assert = require('chai').assert;
// const task1 = require('../task1');
// const task3 = require('../task3');
const subTask1= require('../dbTask2').wholePopulation;
const subTask2= require('../dbTask2').sum;
console.log(subTask1);
console.log(subTask2);
describe('Task2', function(){
    it("wholePopulation should be lower than 2000000000", function(){
        let result = subTask1();
        assert.isBelow(result, 2000000000);
    });
    it('sum should be lower than 50', function(){
        let result = subTask2();
        assert.isBelow(result, 50);
    });
});