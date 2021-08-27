function ConvertHandler() {
  
  this.getNum = function(input) {
    const indexOfValue = input.match(/[a-z]/i).index
    let initNum = input.slice(0,indexOfValue)
    if(!initNum) return initNum = 1
    // checks that there are no symbols other that . or /
    if(initNum.match(/[^0-9\/\.]/g)) return null
    if(!initNum.match(/\//)){
      if(initNum.match(/\./g) && initNum.match(/\./g).length > 1 ) return null
      return Number.parseFloat(initNum)
    }
    // CHECK THAT THERE ARE NO MORE THAT 1 / SYMBOL
    else if(initNum.match(/\//g).length > 1){
      return null
    }
    else {
      const index = initNum.match(/\//).index
      const firstNum = initNum.slice(0,index)
      const secondNum = initNum.slice(index + 1)
      if(firstNum.match(/\./g) && firstNum.match(/\./g).length > 1 ) return null
      if(secondNum.match(/\./g) && secondNum.match(/\./g).length > 1 ) return null
      return Number.parseFloat(firstNum) / Number.parseFloat(secondNum)
    }
  };
  
  this.getUnit = function(input) {
    const validUnits = ["kg","lbs","mi","km","gal","L"]
    const indexOfValue = input.match(/[a-z]/i).index
    let initUnit = input.slice(indexOfValue).toLowerCase()
    if(initUnit === 'l') return "L"
    else if(validUnits.find(unit=>initUnit===unit)) return initUnit
    else return null
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit) {
      case 'L':
        result = 'gal'
        break;
      case 'gal':
        result = 'L'
        break;
      case 'km':
        result = 'mi'
        break;
      case 'mi':
        result = 'km'
        break;
      case 'lbs':
        result = 'kg'
        break;
      case 'kg':
        result = 'lbs'
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let spelledUnit;
    switch (unit) {
      case 'gal':
        spelledUnit = 'gallons'
        break;
      case 'L':
        spelledUnit = 'liters'
        break;
      case 'km':
        spelledUnit = 'kilometers'
        break;
      case 'mi':
        spelledUnit = 'miles'
        break;
      case 'lbs':
        spelledUnit = 'pounds'
        break;
      case 'kg':
        spelledUnit = 'kilograms'
        break;
    
      default:

        break;
    }
    
    return spelledUnit;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    const roundToFiveDecimalPoints = (num) =>{
      return Math.round((num + Number.EPSILON) * 100000) / 100000
    }
    switch (initUnit) {
      case 'gal':
        result = roundToFiveDecimalPoints(initNum * galToL)
        break;
        case 'L':
          result = roundToFiveDecimalPoints(initNum / galToL)
        break;
        case 'lbs':
        result = roundToFiveDecimalPoints(initNum * lbsToKg)
        break;
        case 'kg':
        result = roundToFiveDecimalPoints(initNum / lbsToKg)
        break;
        case 'mi':
          result = roundToFiveDecimalPoints(initNum * miToKm)
        break;
        case 'km':
        result = roundToFiveDecimalPoints(initNum / miToKm)
        break;
      default:
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
