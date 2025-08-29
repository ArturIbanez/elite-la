import './App.css'
import imgHeader from "./assets/img_header.png"
import imgHeader2 from "./assets/img-header-2.png"
import checkRed from "./assets/check-red.png"
import logo from "./assets/elite-la.png"
import Beams from "./components/beams/Beams";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import formaAbstrata from "./assets/svg/forma-abstrata.svg"

function App() {
  return(
    <div className='container'>

      <header>
        <div style={{ width: '100%', height: '830px', position: 'relative' }}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ff0000ff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
          <img className='img-hero-2' src={imgHeader2} alt="" />
          <img className='img-hero' src={imgHeader} alt="" />
          <img className='logo' src={logo} alt="" />
        </div>

        <div className='scrolling-container'>
          <div className='scrolling-content'>
            <div className='scrolling-track'>
              <span>ELITE LA</span>
              <span>ELITE LA</span>
              <span>ELITE LA</span>
              <span>ELITE LA</span>
              <span>ELITE LA</span>
              <span>ELITE LA</span>
              <span>ELITE LA</span>
              <span>ELITE LA</span> 

              <span aria-hidden="true">ELITE LA</span>
              <span aria-hidden="true">ELITE LA</span>
              <span aria-hidden="true">ELITE LA</span>
              <span aria-hidden="true">ELITE LA</span>
              <span aria-hidden="true">ELITE LA</span>
              <span aria-hidden="true">ELITE LA</span>
              <span aria-hidden="true">ELITE LA</span>
              <span aria-hidden="true">ELITE LA</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={true}
          duration={3}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
          delay={0}>
          <h1 className='title-1'>Por que escolher a <span className='title-1-span'>ELITE LA?</span></h1>
          <p className='p-1'>Na Elite LA, você não recebe fórmulas prontas: cada plano é desenvolvido de forma personalizada, levando em conta sua rotina, objetivos e nível atual.</p>
          <p className='p-1'>Com acompanhamento profissional e metodologia comprovada, garantimos que você evolua com segurança, disciplina e resultados reais.</p>
          <p className='p-1'>Escolher a Elite LA é investir em:</p>
          <div className='p-1-ul'>
            <p><img src={checkRed} alt="" />Planos de treino e dieta exclusivos</p>
            <p><img src={checkRed} alt="" />Suporte direto com seu coach</p>
            <p><img src={checkRed} alt="" />Acompanhamento constante da sua evolução</p>
            <p><img src={checkRed} alt="" />Resultados sólidos, sem atalhos ou modismos</p>
          </div>
        </AnimatedContent>
        <img className='forma-abstrata' src={formaAbstrata} alt="" />
      </main>
    </div>
  )
}
export default App