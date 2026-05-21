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
        <section className={s.s1}>

        </section>

       <section className={s.s2}>

       <iframe className={s.video} src="https://www.youtube.com/embed/ZK6FEDVd1RA?si=2yhT8_S_kRlEoAUr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
       </section>
        
        <section className={s.s3} >

          <img src="/rare-beauty-logo.png" alt="" width="300px" />
          <section>
         <h1>conheça nossa marca</h1>
         <h2>Rare Beauty chega para desconstruir os padrões irreais de perfeição. Queremos empoderar nossa comunidade para desafiar normas de beleza, moldando conversas positivas sobre autoaceitação e saúde mental. Esta é uma maquiagem feita para você se sentir bem, sem esconder o que o torna único - porque a Rare Beauty não é sobre ser outra pessoa, mas ser quem você é.</h2>
          </section>
       
        </section>
        

        <section className={s.s4}>

        </section>

        <section className={s.s5}>

        </section>

        <section className={s.s6}>

        </section>

    </main>
    <footer>
            
    </footer>
    </>
  )
}

export default App
