'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert', (req,res)=>{
    // CHEKING THAT THERE IS AN ACTUAL INPUT
    if(!req.query.input) return res.send('Invalid Input - You should provide a query with the following format "/api/convert?input=X"')
    const input = req.query.input
    // CHEKING THAT SUCH AN IMPORT IS A STRING
    if(typeof input !== 'string' ) return res.send('Invalid Input - You should provide a query with the following format "/api/convert?input=X"')
    // CHEKING THAT THIS STRING HAS A UNIT
    const indexOfUnit = input.match(/[a-z]/i)
    if(!indexOfUnit) return res.send('invalid unit')
    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)
    if((!initNum | initNum === Infinity) && initUnit ) return res.send('invalid number')
    else if((!initNum | initNum === Infinity) && !initUnit) return res.send('invalid number and unit')
    else if(!initUnit) return res.send('invalid unit')
    else {
      const returnNum = convertHandler.convert(initNum,initUnit)
      const returnUnit = convertHandler.getReturnUnit(initUnit)
      return res.json({initNum, initUnit, returnNum, returnUnit, string: `${initNum} ${convertHandler.spellOutUnit(initUnit)} converts to ${returnNum} ${convertHandler.spellOutUnit(returnUnit)}`})
    }
  })
};
