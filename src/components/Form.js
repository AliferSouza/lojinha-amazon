const Form = {
  render() {
    document.querySelector(".captura").innerHTML = ` <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSc3gGup8dp9sco4syXpjPLqYlTehjZUnuXfQ-dc2pHIgyUW0A/formResponse">
      <h2 class="cap-text">Receba novidades</h2>
      <input type="text" name="entry.1646243795" required  placeholder="Digite seu E-mail" >
      <button type="submit" class="btncap">Enviar</button>
  </form>
      `;
  }
}
export { Form };