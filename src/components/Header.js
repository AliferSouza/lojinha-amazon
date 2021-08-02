
function Header() {

  fetch("../../dados.json")
      .then(response => response.json())
      .then(data => {showHeader(data.interface); console.log(data.interface)
      }).catch(e => { console.log("ERRO" + e)}) 
}


function showHeader(posts) {
  let output = ''    
      output += `
      <a href="../../index.html"><img class="image" src="../../publico/images/icone-sacola.png" width="25" height="25"></a>
      <h1>Loja do Alifer</h1>
      `
  document.querySelector('.header').innerHTML = output
}

export { Header };


