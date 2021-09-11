import './App.css';
import {useState} from 'react'
function App() {
  
  const [color,setColor]=useState("")
  const [coloredText,setColoredText]=useState("")
  function textAsH1(e){
   setColoredText(e.target.value)
  }
  function changeTheColor(eve){

  if(eve.target.innerHTML==="Red"){
     setColor("Red")
  }
  else{
    setColor("Green")
  }
  console.log(eve.target.innerHTML)

}
  return(
    <div>
        <input onChange={textAsH1}style={{color}} type="text" />
       <h1 style={{color}}>{coloredText} </h1> 
        <button  onClick={changeTheColor}>Red</button>
        <button  onClick={changeTheColor}>Green</button>
    </div>
  )
}
   
   
   

export default App;
