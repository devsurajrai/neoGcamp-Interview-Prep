inputText=document.querySelector("textarea")
button=document.querySelectorAll("button")

button.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.path[0].classList.contains('red')){
      inputText.style.color="red"
    }
    else if(e.path[0].classList.contains('green')){
      inputText.style.color="green"
    }
    else{
      inputText.style.color="blue"
    }
  })
})
