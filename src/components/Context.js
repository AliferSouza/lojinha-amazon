import { Header } from './Header.js';
import { Show } from './Show.js';
import { Form } from './Form.js';
import { Menu } from './Menu.js';
import { BlogTimeline } from './BlogTimeline.js';


const Context = {
  renderLoja() {
    //passar o contexto do loja
    const url = `dados.json`
    fetch(url).then(response => response.json())
      .then(data => {
        Show.renderCards(data.Cards); Show.carCards(data.cCards); Show.desCards(data.desCards);
      }).catch(e => { console.log("ERRO" + e) })
    Header();
    Form.render();
    Menu.render();

  },
  renderblog() {
    //passar o contexto do blog   
    BlogTimeline();
    Header();
    Menu.render();
  }
}
export { Context }