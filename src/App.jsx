import './App.css'
import imgHeader from "./assets/img_header.png"
import imgHeader2 from "./assets/img-header-2.png"
import checkRed from "./assets/check-red.png"
import logo from "./assets/elite-la.png"
import Beams from "./components/beams/Beams";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import formaAbstrata from "./assets/svg/forma-abstrata.svg"
import gymMan from "./assets/gym-man.png"
import fire from "./assets/fire.png"
import apple from "./assets/apple.png"
import support from "./assets/support.png"
import imgResultado1 from "./assets/img-resultado1.png"
import imgResultado2 from "./assets/img-resultado2.png"
import imgResultado3 from "./assets/img-resultado3.png"
import checkRed2 from "./assets/checkred.svg"

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
        <div className='main-div1'>
          <div className='main-pt1'>
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
              <p className='p-1'>Na Elite LA, você não recebe fórmulas prontas: cada plano é desenvolvido de forma personalizada, levando em conta sua rotina, objetivos e nível atual. <br /><br />
Com acompanhamento profissional e metodologia comprovada, garantimos que você evolua com segurança, disciplina e resultados reais. <br /> <br />
Escolher a Elite LA é investir em: </p>
              <div className='p-1-ul'>
                <p><img src={checkRed} alt="" />Planos de treino e dieta exclusivos</p>
                <p><img src={checkRed} alt="" />Suporte direto com seu coach</p>
                <p><img src={checkRed} alt="" />Acompanhamento constante da sua evolução</p>
                <p><img src={checkRed} alt="" />Resultados sólidos, sem atalhos ou modismos</p>
              </div>
            </AnimatedContent>
          </div>
          <img className='forma-abstrata' src={formaAbstrata} alt="" />
          <div className='main-pt2'>
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
                <div className='circulo'></div>
              </AnimatedContent>
          </div>
        </div>

        <div className='main-div2'>
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
            <div className='main-div2-div1'>
              <div className='quadrado'><img src={gymMan} alt="" /></div>
              <p>Treino personalizado – adaptado ao seu nível e rotina</p>
              <div className='quadrado'><img src={support} alt="" /></div>
              <p>Suporte direto – acompanhamento via WhatsApp</p>
            </div>

            <div className='main-div2-div2'>
              <div>
                <div className='quadrado'><img src={apple} alt="" /></div>
                <p>Nutrição sob medida – dieta prática e eficaz</p>
              </div>

              <div>
                <div className='quadrado'><img src={fire} alt="" /></div>            
                <p>Resultados reais – evolução garantida com disciplina</p>
              </div>
            </div>
          </AnimatedContent>
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
      </main>

      <aside>
        <div className='aside-div1'>
          <h1>APROVADO E TESTADO POR <b>+5000 ALUNOS</b></h1>
          <div className='resultados'>
            <img className='resultado1' src={imgResultado1} alt="" />
            <img className='resultado2' src={imgResultado2} alt="" />
            <img className='resultado3' src={imgResultado3} alt="" />
          </div>

          <div className='aside-div2'>
            <div className='background-aside'></div>
            <div className='aside-card'>
              <b>PARA QUEM É?</b>
              <p className='texto-aside-card'>Falta motivação e consistência na jornada fitness e sente que sempre acaba desistindo no meio do caminho <br /><br />
                Quer ter aquele shape incrível com abdômen definido e músculos marcados, mas não sabe como equilibrar ganho de massa e perda de gordura ao mesmo tempo. <br /><br />
                Se sente perdido com tanta informação contraditória sobre treino e dieta e não sabe o que realmente funciona. <br /><br />
                Já teve resultados no passado, mas estagnou e agora não vê mais evolução, por mais que se esforce. <br /><br />
                Está cansado de métodos milagrosos, como cápsulas ou dietas restritivas, que prometem resultados rápidos, mas não entregam nada consistente. <br /><br />
                Quer acelerar sua transformação física, mas sem perder saúde ou qualidade de vida no processo. <br /><br />
                Tem dificuldade em criar um plano eficiente, seja por falta de conhecimento ou orientação adequada. <br /><br />
                Se sente frustrado ao treinar duro e não ver mudanças no espelho que condigam com seu esforço. <br /><br />
                Precisa de um guia claro e direto, que mostre exatamente o que fazer para alcançar o físico dos seus sonhos. <br /><br />
                Sonha em construir um corpo de respeito, que inspire confiança e faça você se sentir bem consigo mesmo.
              </p>
              <img className='checkred-card1' src={checkRed2} alt="" />
              <img className='checkred-card2' src={checkRed2} alt="" />
              <img className='checkred-card3' src={checkRed2} alt="" />
              <img className='checkred-card4' src={checkRed2} alt="" />
              <img className='checkred-card5' src={checkRed2} alt="" />
              <img className='checkred-card6' src={checkRed2} alt="" />
              <img className='checkred-card7' src={checkRed2} alt="" />
              <img className='checkred-card8' src={checkRed2} alt="" />
              <img className='checkred-card9' src={checkRed2} alt="" />
              <img className='checkred-card10' src={checkRed2} alt="" />
            </div>
          </div>
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
      </aside>

      <section className='pacotes'>
          <div className='pacote1'>
            <div className='pacote-card1'>
              <h1>PROJETO TREINO</h1>
              <div className='barra'></div>
              <img className='logo-pacote' src={logo} alt="" />
              <p>Dietas de Cutting <br /> <br />
                Emagrecimento/Definição <br /> <br />
                Recomposição Corporal para Falsos Magros <br /> <br />
                Fichas de Treino para Ganhar Massa Muscular enquanto Queima Gordura <br /> <br />
                Fichas de Treino para Evoluir Pontos Fracos (Desenvolva um Músculo Fraco sem Abrir Mão dos Outros)
              </p>
              <h4>De R$99,90 <b>por</b></h4>
              <h3>R$79,90/<b>mês</b></h3>
              <button>QUERO FAZER PARTE</button>
              <img className='checkred-pacote1' src={checkRed2} alt="" />
              <img className='checkred-pacote2' src={checkRed2} alt="" />
              <img className='checkred-pacote3' src={checkRed2} alt="" />
              <img className='checkred-pacote4' src={checkRed2} alt="" />
              <img className='checkred-pacote5' src={checkRed2} alt="" />
            </div>
          </div>

          <div className='pacote1'>
            <div className='pacote-card2'>
              <div className='pacote-card1'>
                <h1>PROJETO COMPLETO</h1>
                <div className='barra'></div>
                <img className='logo-pacote' src={logo} alt="" />
                <p>Dietas de Bulking (10 Níveis de Bulking, do Iniciante ao Avançado) <br /><br />
Fichas de Treino para Bulking (Volume Baixo, Moderado e Alto) <br /><br />
Fichas de Treino para Evoluir Pontos Fracos (Desenvolva um Músculo Fraco sem Abrir Mão dos Outros) <br /><br />
Guia de Suplementação! Para você que deseja aprender a função de cada suplemento, como eles podem te ajudar e como não cair em golpes 
                </p>
                <h4>De R$259,90 <b>por</b></h4>
                <h3>R$219,90/<b>mês</b></h3>
                <button>QUERO FAZER PARTE</button>
                <img className='checkred-pacote2-2' src={checkRed2} alt="" />
                <img className='checkred-pacote3-2' src={checkRed2} alt="" />
                <img className='checkred-pacote4-2' src={checkRed2} alt="" />
                <img className='checkred-pacote5-2' src={checkRed2} alt="" />
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}
export default App