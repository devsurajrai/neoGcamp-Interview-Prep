let objOne={
  name:"Ram",
  age:"Treta",
  power:2500
}
let objTwo={
  name:"Krishna",
  age:"Dwapar",
  power:2325
}

function returnPersonWithMorePower(objOne,objTwo){
  if(objOne.power>objTwo.power){
    return objOne.name
  }
  else{
    return objTwo.name
  }
}

console.log(`The person With more power is ${returnPersonWithMorePower(objOne,objTwo)}`)