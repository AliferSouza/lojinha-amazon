const Menu = {
    render() {
        document.querySelector(".navigation").innerHTML = `
      <div class="toggle"></div>
      <ul>
          <li>
              <a href="#acima">
                  <span class="icon">▲</span>
              </a>
          </li>
      </ul>
  
      <ul>
          <li>
              <a href="#"> <span><input id="night-mode" class="lamp" type="checkbox" aria-label="night-mode" />
                      <label for="night-mode"></label>
                  </span></a>
          </li>
      </ul>
  
      <ul>
          <li>
              <a href="./src/Pages/blog.htm">
                  <span class="icon" style="top: 25px;">&#8492;</span>
              </a>
          </li>
      </ul>
      <ul>
          <li>
              <a href="#">
                  <span class="icon"><i class="fa fa-rss" aria-hidden="true"></i></span>
              </a>
          </li>
      </ul>      
      `;
        const navigator = document.querySelector('.navigation')

        document.querySelector('.toggle').onclick = function () {
            this.classList.toggle('active');
            navigator.classList.toggle('active');
        }
        //Mover o Menu quando em tela grande

        const el = document.querySelector(".navigation");

        let isResizing = false;

        el.addEventListener("mousedown", mousedown);

        function mousedown(e) {
            window.addEventListener("mousemove", mousemove);
            window.addEventListener("mouseup", mouseup);

            let prevX = e.clientX;
            let prevY = e.clientY;

            function mousemove(e) {
                if (!isResizing) {
                    let newX = prevX - e.clientX;
                    let newY = prevY - e.clientY;

                    const rect = el.getBoundingClientRect();

                    el.style.left = rect.left - newX + "px";
                    el.style.top = rect.top - newY + "px";

                    prevX = e.clientX;
                    prevY = e.clientY;
                }
            }

            function mouseup() {
                window.removeEventListener("mousemove", mousemove);
                window.removeEventListener("mouseup", mouseup);
            }
        }

          // pegamos o valor no localStorage
          const nightModeStorage = localStorage.getItem('gmtNightMode')
          const nightMode = document.querySelector('#night-mode')
  
          // caso tenha o valor no localStorage
          if (nightModeStorage) {
              // ativa o night mode
              document.documentElement.classList.add('night-mode')
              // já deixa o input marcado como ativo
              nightMode.checked = true
          }
          // ao clicar mudaremos as cores
          nightMode.addEventListener('click', () => {
              // adiciona a classe `night-mode` ao html
              document.documentElement.classList.toggle('night-mode')
  
              // se tiver a classe night-mode
              if (document.documentElement.classList.contains('night-mode')) {
                  // salva o tema no localStorage
                  localStorage.setItem('gmtNightMode', true)
                  return
              }
              // senão remove
              localStorage.removeItem('gmtNightMode')
          })

    }

}
export { Menu };