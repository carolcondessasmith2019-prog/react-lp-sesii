import s from './App.module.css'

function App() {
//js

  return (
    <>
      <nav>
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
        
     </nav>

    <main>

        <section id="s1">

        </section>

       <section id="s2">

       </section>
        
        <section id="s3">

            <iframe className={s.video} width: 100%; height: 1100px; src="https://www.youtube.com/embed/AG9Fionf4AA?si=Fw7d50DesPkfP1Ooautoplay=1&mute" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
        </section>

       <section>
        
       </section>
        <h1>conheça nosa marca</h1>
        <h2>Rare Beauty chega para desconstruir os padrões irreais de perfeição. Queremos empoderar nossa comunidade para desafiar normas de beleza, moldando conversas positivas sobre autoaceitação e saúde mental. Esta é uma maquiagem feita para você se sentir bem, sem esconder o que o torna único - porque a Rare Beauty não é sobre ser outra pessoa, mas ser quem você é.</h2>
       </section>

        <section id="s5">

        </section>

        <section id="s6">

        </section>

        <section id="s7">

        </section>

    </main>
    <footer>
            
    </footer>
    </>
  )
}

export default App
