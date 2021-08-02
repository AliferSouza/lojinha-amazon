
function Header() {
  fetch("../../dados.json")
      .then(response => response.json())
      .then(data => {show(data.Logo);
      }).catch(e => { console.log("ERRO" + e)}) 
}


function show(logos) {
  let output = ''
  for(let logo of logos) {     
      output +=  `      
        <a href="../../index.html"><img class="image" src="${logo.src}" width="25" height="25"></a>
        <h1>Loja do Alifer</h1>
           `
  }

  document.querySelector('.header').innerHTML = output
}

export { Header };

