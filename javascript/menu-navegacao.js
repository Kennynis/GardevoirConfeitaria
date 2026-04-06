class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom" style="background-color: #2B2B2B;">
      
      <div class="container">

        <img src="/img/logo.png" alt="logo" style="width: 240px; height: 100px; object-fit: cover; margin-left: 200px; "; class="logo-navbar" >

        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">

            <li class="nav-item">
              <a class="nav-link" href="index.html">Início</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="produtos.html">Produtos</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="cursos.html">Cursos</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="localizacao.html">Localização</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="sobrenos.html">Sobre nós</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="contato.html">Contato</a>
            </li>

          </ul>
        </div>

      </div>

    </nav>
    `;
  }
}

customElements.define("menu-navegacao", Navbar);