import { Context } from './components/Context.js'

const App = {
    paginaInicial() {
        Context.renderLoja()        
    },
    paginaBlog(){
        Context.renderblog()
    }
}

export { App } 

