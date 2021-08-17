inputOne=document.querySelector(".input-one")
inputTwo=document.querySelector(".input-two")
result=document.querySelector(".result")

button=document.querySelectorAll("button")
console.log(button)
// buttonPlus=document.querySelector(".button-plus")
// buttonMinus=document.querySelector(".button-minus")
// buttonMultiply=document.querySelector(".button-multiply")
// buttonDivide=document.querySelector(".button-divide")


let clickHandler=(e)=>{
  console.log(e)
  if(e.path[0].classList.contains("plus")){
    result.value=parseInt(inputOne.value)+parseInt(inputTwo.value)
  }
  else if(e.path[0].classList.contains("minus")){
    if(parseInt(inputOne.value)>parseInt(inputTwo.value))
    {result.value=parseInt(inputOne.value)-parseInt(inputTwo.value)}
    else{
      result.value=parseInt(inputTwo.value)-parseInt(inputOne.value)
    }
  }
  else if(e.path[0].classList.contains("multiply")){
    result.value=parseInt(inputOne.value)*parseInt(inputTwo.value)
  }
  else{
    if(parseInt(inputOne.value)>parseInt(inputTwo.value))
    {result.value=parseInt(inputOne.value)/parseInt(inputTwo.value)}
    else{
      result.value=parseInt(inputTwo.value)/parseInt(inputOne.value)
    }
  }
}

button.forEach((button)=>{
  button.addEventListener('click',clickHandler)})
