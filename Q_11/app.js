passwordInput=document.querySelector(".passwrod-field")
validateButton=document.querySelector("button")
validationResult=document.querySelector(".validation-result")
console.log("I am inside")

function clickHandler(){
enteredPasswordArr=passwordInput.value.split("")
if(enteredPasswordArr.length<9 ||enteredPasswordArr.length>13 || !enteredPasswordArr.includes("@")){
  validationResult.innerHTML=`Password length must not be less than 10 and greater than 14
                                and must contain @ `
  validationResult.style.color="red"
  passwordInput.style.backgroundColor="red"

}
else{
  validationResult.innerHTML=`Password is valid`
  passwordInput.style.backgroundColor="green"
  validationResult.style.color="green"

}
}
validateButton.addEventListener('click',clickHandler)



