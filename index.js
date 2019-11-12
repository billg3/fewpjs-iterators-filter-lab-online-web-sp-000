// Code your solution here

function findMatching (drivers,string) {
  return drivers.filter(driver=> string.toLowerCase() === driver.toLowerCase())
}


function findMatching (drivers, string ) {

  return drivers.filter(driver => string.charAt(0) === driver.charAt(0))
  
}
