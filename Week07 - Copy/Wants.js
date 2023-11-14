let ScoreButton = document.getElementById('SCORE');
let ScoreShed = document.getElementById('ScoreShed');
let inputyards = document.getElementById('inputyards');
let count = 1;
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
/* This is a cool project that is dream goal list I have ever written*/3333