



fetch("db.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        show(data);
    }).catch(e => {
        console.log("ERRO" + e)
    })


function show(posts) {
    let output = ''

    for (let post of posts) {

        output += `<div class="card">
            <img src="${post.src}" width="70" height="70">
            <h2>${post.Titulo}</h2>
            <br>
            <br>
            <a class="btn" href="${post.Link}">Adquerir</a>
        </div>
`
    }
    document.querySelector('.conteiner-cards').innerHTML = output
}



