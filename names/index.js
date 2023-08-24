const arrayOfNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

console.log(arrayOfNames);
console.log(getFirstNames);

const getPeopleInCity = (nameList) => {
  return getFirstNames(nameList);
};
module.exports = getPeopleInCity;
