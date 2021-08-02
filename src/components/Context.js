import { Show } from './Show.js';
import { Form } from './Form.js';
import { Menu } from './Menu.js';
import { BlogTimeline } from './BlogTimeline.js';
import { Footer } from './Footer.js';

const Context = { 
  renderLoja() {   
    //passar o contexto do loja
    const url = `dados.json`
    fetch(url).then(response => response.json())
      .then(data => {
        Show.renderCards(data.Cards);
         Show.carCards(data.cCards);
          Show.desCards(data.desCards);        
      }).catch(e => { console.log("ERRO" + e) })

    const footer = 'Loja do Alifer'  
    
    Form.render();
    Menu.render();
    Footer.render(footer)

  },
    renderblog() {  
      
    const footer = 'Loja do Alifer'    
    //passar o contexto do blog   
    Footer.render(footer)
    BlogTimeline();   
    Menu.render();
  }
}
export { Context }






