import s from './App.module.css'

function App() {
  //js

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>

      {/* <nav>
        <span className={s.navItems} onclick="navTo('s1')">
        <a className={s.navWords}>home</a>
      </span>
      <span className={s.navItems} onclick="navTo('s2')">
        <a className={s.navWords}>mais vendidos</a>
      </span>
      <span className={s.navItems} onclick="navTo('s3')">
        <a className={s.navWords}>ofertas</a>
      </span>
      <span className={s.navItems} onclick="navTo('s4')">
        <a className={s.navWords}>pele</a>
      </span>
      <span className={s.navItems} onclick="navTo('s3')">
        <a className={s.navWords}>olhos</a>
      </span>
      <span className={s.navItems} onclick="navTo('s4')">
        <a className={s.navWords}>cabelos</a>
      </span>
        
     </nav> */}
      <main>
        <section id='s1' className={s.s1}>

        </section>

        <section id='s2' className={s.s2}>

          <iframe className={s.video} src="https://www.youtube.com/embed/ZK6FEDVd1RA?si=2yhT8_S_kRlEoAUr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>

        <section id='s3' className={s.s3} >
          <section>
            <h1 className={s.titulo}>Conheça nossos produtos mais vendidos</h1>
            <h2 className={s.subtitulo}>Soft Pinch Liquid Blush</h2>
            <h3 className={s.produto1}></h3>
            <h4 className={s.subtitulo}>positive light liquid luminizer</h4>
          </section>
        </section>

        <section id='s4' className={s.s4}>

        </section>

        <section id='s5' className={s.s5}>

        </section>

        <section id='s6' className={s.s6}>

        </section>

      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
