class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `        
        <footer class="py-3">
            <div class="container-fluid text-center text-white" style="background-color: #2B2B2B; height: 250px;;">

                <div style="display: flex; align-items: center; justify-content: space-between; max-width: 1000px; margin: 0 auto;"> 

                    <div style="padding-left: 40px">
                        <img src="/img/logo.png" style="width: 250px;">
                    </div>

                    <div style= "position: absolute; left: 50%; text-align: left;">
                        <ul class="footer-link"style="list-style: none; padding: 0; margin: 0;">
                            <li class="bottom-menu" style="color: #F0C260;">Páginas</li>
                            <li class="bottom-menu footer-link" style="margin-top: 15px"><a class="footer-link" href=#>Início</a></li>
                            <li class="bottom-menu footer-link"><a class="footer-link" href=#> Produtos</a></li>
                            <li class="bottom-menu footer-link"><a class="footer-link" href=#>Cursos</a></li>
                            <li class="bottom-menu footer-link"><a class="footer-link" href=#>Localização</a></li>
                            <li class="bottom-menu footer-link"><a class="footer-link" href=#>Sobre nós</a></li>
                            <li class="bottom-menu footer-link"><a class="footer-link" href=#>Contate-nos</a></li>
                        </ul>
                    </div>

                    <div style= "text-align: left; margin-left: auto;">
                        <ul style="list-style: none; padding: 0; margin: 0; align-items: flex-start;">
                            <li class="bottom-menu" style="color: #F0C260;"> Contato </li>
                            <li class="bottom-menu" style="margin-top: 15px">R. João Manoel, 460</li>
                            <li class="bottom-menu">São Francisco, </li>
                            <li class="bottom-menu">Curitiba - PR, 80510-250</li>
                            <li class="bottom-menu" style="margin-top: 10px;">Whatsapp: (41) 98888-9595</li>
                        </ul>
                        <img src="/img/footer-icons.png" style="width: 150px; heigh: 50px; margin-top: 15px;">
                    </div>

                </div>
            </div>
            <div class="container-fluid text-center text-center py-2" style="background-color: #8F2738; color: #E6BFD2; margin-bottom: 0;">
                <span class="mx-auto text-footer" style="color: #E6BFD2">
                    2025 © Gardevoir Confeitaria - Confeitaria
                </span>
            </div>

        </footer>
        `;
  }
}

customElements.define("ins-footer", Footer);