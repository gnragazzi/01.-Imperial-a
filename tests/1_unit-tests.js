const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('convertHandler should correctly read a whole number input.',()=>{
        assert.equal(convertHandler.getNum("8mi"),8)
    })
    test('convertHandler should correctly read a decimal number input.',()=>{
        assert.equal(convertHandler.getNum("1.2mi"),1.2)
    })
    test('convertHandler should correctly read a fractional input.',()=>{
        assert.equal(convertHandler.getNum("1/2mi"),0.5)
    })
    test('convertHandler should correctly read a fractional input with a decimal.',()=>{
        assert.equal(convertHandler.getNum("1.2/1.2mi"),1)
    })
    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).',()=>{
        assert.equal(convertHandler.getNum("3/2/3mi"),null)
    })
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.',()=>{
        assert.equal(convertHandler.getNum("mi"),1)
    })
    test('convertHandler should correctly read each valid input unit.',()=>{
    const validUnits = ["kg","lbs","mi","km","gal","L"]
        validUnits.forEach(unit=>{
            return assert.equal(convertHandler.getUnit(`12${unit}`),unit)
        })
        // assert.equal(convertHandler.getUnit("12gal"),"gal",'hello world')
        // assert.equal(convertHandler.getUnit("12L"),"L")
        // assert.equal(convertHandler.getUnit("12mi"),"mi")
        // assert.equal(convertHandler.getUnit("12km"),"km")
        // assert.equal(convertHandler.getUnit("12lbs"),"lbs")
        // assert.equal(convertHandler.getUnit("12kg"),"kg")
        
    })
    test('convertHandler should correctly return an error for an invalid input unit.',()=>{
        assert.equal(convertHandler.getUnit("12kgms"),null)
    })
    test('convertHandler should return the correct return unit for each valid input unit.',()=>{
        assert.equal(convertHandler.getReturnUnit("kg"),'lbs')
        assert.equal(convertHandler.getReturnUnit("lbs"),'kg')
        assert.equal(convertHandler.getReturnUnit("mi"),'km')
        assert.equal(convertHandler.getReturnUnit("km"),'mi')
        assert.equal(convertHandler.getReturnUnit("L"),'gal')
        assert.equal(convertHandler.getReturnUnit("gal"),'L')
    })
    test('should correctly return the spelled-out string unit for each valid input unit.',()=>{
        assert.equal(convertHandler.spellOutUnit("gal"),'gallons')
        assert.equal(convertHandler.spellOutUnit("L"),'liters')
        assert.equal(convertHandler.spellOutUnit("km"),'kilometers')
        assert.equal(convertHandler.spellOutUnit("mi"),'miles')
        assert.equal(convertHandler.spellOutUnit("lbs"),'pounds')
        assert.equal(convertHandler.spellOutUnit("kg"),'kilograms')
    })
    test('convertHandler should correctly convert gal to L.',()=>{
        assert.equal(convertHandler.convert(1,"gal"),3.78541)
    })
    test('convertHandler should correctly convert L to gal.',()=>{
        assert.equal(convertHandler.convert(1,"L"),0.26417)
    })
    test('convertHandler should correctly convert mi to km.',()=>{
        assert.equal(convertHandler.convert(1,"mi"),1.60934)
    })
    test('convertHandler should correctly convert km to mi.',()=>{
        assert.equal(convertHandler.convert(1,"km"),0.62137)
    })
    test('convertHandler should correctly convert lbs to kg.',()=>{
        assert.equal(convertHandler.convert(1,"lbs"),0.45359)
    })
    test('convertHandler should correctly convert kg to lbs.',()=>{
        assert.equal(convertHandler.convert(1,"kg"),2.20462)
    })
    
});