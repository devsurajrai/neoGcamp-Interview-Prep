button=document.querySelector(".loaded-btn")
textOnThePage=document.querySelector(".loading")

button.addEventListener('click',()=>{
 clearInterval(interval)
  textOnThePage.classList.add("visibility-hidden")
})

var interval=setInterval(() => {
  textOnThePage.classList.toggle("visibility-hidden")
}, 1000);