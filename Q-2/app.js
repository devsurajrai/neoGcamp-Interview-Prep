textArea=document.querySelector("textarea")
button=document.querySelectorAll("button")
let currentFontSize=12

button.forEach((button)=>{
button.addEventListener('click',(e)=>{
  if(textArea.value!==""){
    if(e.path[0].classList.contains("increase-font-size")){
      textArea.style.fontSize=(currentFontSize+2)+"px"
      currentFontSize+=2
    }
    else{
      textArea.style.fontSize=(currentFontSize-2)+"px"
      currentFontSize-=2
    }
  }
})
})

