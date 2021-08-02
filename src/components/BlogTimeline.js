
function BlogTimeline() {

    fetch("../../dados.json")
        .then(response => response.json())
        .then(data => {show(data.Blog); console.log(data.Blog)
        }).catch(e => { console.log("ERRO" + e)}) 
}


function show(posts) {
    let output = ''
    for(let item of posts) {     
        output +=  `  
        <div class="container-blog">    
        <div class="post">
        <div class="number">${item.id}</div>
        <div class="post-info">
        <h2 class="post-title">${item.title}</h2>
        <p class="post-body">${item.body}</p>
        
        </div>       
       </div>
       `
    }
    document.querySelector('.blogpost').innerHTML = output
}



export { BlogTimeline };