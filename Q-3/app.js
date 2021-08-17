input=document.querySelector("input")
button=document.querySelectorAll("button")
output=document.querySelector("p")


button.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    text=input.value
      if(e.path[0].classList.contains('h1')){
        output.innerHTML=`<h1>${text}</h1>`
      }
      else if(e.path[0].classList.contains('h2')){
        output.innerHTML=`<h2>${text}</h2>`
      }
      else{
        output.innerHTML=`<h3>${text}</h3>`
      }
  })
})
