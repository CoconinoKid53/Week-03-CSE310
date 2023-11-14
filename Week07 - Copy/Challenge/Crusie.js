let BurnButton = document.getElementById('Burn');
let BurnShed = document.getElementById('BurnShed');
let inputyards = document.getElementById('inputyards')


function clickHandler(){
    if (inputyards.value == ""){ ScoreShed.innerHTML = ""}
    else {
      let p = document.createElement("p")
      p.innerHTML = inputyards.value
      p.setAttribute("id", `p${count}`)
      
      p.addEventListener("click", (e)=> {
       let target =  e.target.closest 
       console.log(e.srcElement)
      e.srcElement.classList.toggle("underline")
      } )

      ScoreShed.appendChild(p)
    }
  
}


ScoreButton.addEventListener('click', clickHandler )