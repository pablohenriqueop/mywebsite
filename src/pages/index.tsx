import Image from 'next/image';


import Menu from '../components/Menu';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <a href="/" className="logo">
              <img src="img/logo.svg" alt="Logo"/>
            </a>
            <div className={styles.textWrapper}>
              <h1>
                Oi! Meu nome é <strong>Pablo Henrique</strong>. <br/>
                Sou um Front-End Developer
              </h1>
              <p>
                A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos.
              </p>
              <div className={styles.socialIcons}>
                <a href="#">
                  <img src="img/facebook.svg" alt="Facebook"/>
                </a>
                <a href="#">
                  <img src="img/instagram.svg" alt="Instagram"/>
                </a>
                <a href="#">
                  <img src="img/linkedin.svg" alt="LinkedIn"/>
                </a>
              </div>
            </div>
            <div className={styles.btnsWrapper}>
              <a href="#" className={styles.anchorLink}>
                <img src="img/angle-down.svg" alt="Clique aqui" />
              </a>
            </div>
          </div>
          <div className={styles.myImageWrapper}>
            <Image src="/img/will.png" alt="Pablo Henrique" layout="fill"/>
            <span className={styles.myTag}>
              SOFTWARE ENGINEER
            </span>
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.wrapperText}>
                <h2>Me conheça um pouco.</h2>
                <p>
                  A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações.
                </p>
                <a href="#" className={styles.btn}>
                  ACESSE MEU LINKEDIN
                </a>
              </div>
            </div>
            <div className={styles.right}>
              <p>
                A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos.
                </p>
                <p>
                  Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos. Ele sobreviveu não apenas cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Ele foi popularizado na década de 1960 com o lançamento de folhas de Letraset contendo passagens.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.jobs}>
          <div className={styles.jobsDots}>
            <Image src="/img/before-works.png" alt="Dots" layout="fill"/>
          </div>
          <div className={styles.container}>
              <h2>
                Trabalhos <br/> em destaque <span>.</span>
              </h2>
          </div>
          <div className={styles.container}>
            <div className={styles.wrapperJobs}>
              <article>
                <div className={styles.thumb}>
                     <Image src="/img/job.png" alt="Job" layout="fill"/>
                </div>
                <div className={styles.descriptionJobs}>
                  <h3>Julio Passos Imóveis</h3>
                  <span>
                    HTML5 - CSS3 - JS
                  </span>
                   <div className={styles.wrapperCall}>
                      <p>
                          A expressão Lorem ipsum em design gráfico e editoração é um texto padrão
                      </p>
                      <a href="#">
                         <img src="img/angle-down.svg" alt="Clique aqui" width="25px" />
                      </a>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.thumb}>
                     <Image src="/img/job.png" alt="Job" layout="fill"/>
                </div>
                <div className={styles.descriptionJobs}>
                  <h3>Julio Passos Imóveis</h3>
                  <span>
                    HTML5 - CSS3 - JS
                  </span>
                   <div className={styles.wrapperCall}>
                      <p>
                          A expressão Lorem ipsum em design gráfico e editoração é um texto padrão
                      </p>
                      <a href="#">
                         <img src="img/angle-down.svg" alt="Clique aqui" width="25px" />
                      </a>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.thumb}>
                     <Image src="/img/job.png" alt="Job" layout="fill"/>
                </div>
                <div className={styles.descriptionJobs}>
                  <h3>Julio Passos Imóveis</h3>
                  <span>
                    HTML5 - CSS3 - JS
                  </span>
                   <div className={styles.wrapperCall}>
                      <p>
                          A expressão Lorem ipsum em design gráfico e editoração é um texto padrão
                      </p>
                      <a href="#">
                         <img src="img/angle-down.svg" alt="Clique aqui" width="25px" />
                      </a>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.thumb}>
                     <Image src="/img/job.png" alt="Job" layout="fill"/>
                </div>
                <div className={styles.descriptionJobs}>
                  <h3>Julio Passos Imóveis</h3>
                  <span>
                    HTML5 - CSS3 - JS
                  </span>
                   <div className={styles.wrapperCall}>
                      <p>
                          A expressão Lorem ipsum em design gráfico e editoração é um texto padrão
                      </p>
                      <a href="#">
                         <img src="img/angle-down.svg" alt="Clique aqui" width="25px" />
                      </a>
                  </div>
                </div>
              </article>
            </div>
            <div className={styles.wrapperBtn}>
                     <a href="#" className={styles.btn}>
                      ACESSE MEU BEHANCE
                    </a>
              </div>
          </div>
        </section>
        <footer className={styles.mainFooter}>
        <div className={styles.container}>
           <div>
             <h3>
               <strong>Tem um projeto?</strong> <br/>
Vamos conversar
             </h3>
           </div>
          <a href="/" className={styles.logoFooter}>
              <img src="img/logo.svg" alt="Logo"/>
          </a>
          <div className={styles.socialIcons}>
                <a href="#">
                  <img src="img/facebook.svg" alt="Facebook"/>
                </a>
                <a href="#">
                  <img src="img/instagram.svg" alt="Instagram"/>
                </a>
                <a href="#">
                  <img src="img/linkedin.svg" alt="LinkedIn"/>
                </a>
              </div>
        </div>
      </footer>
      </main>
    
    </>
  )
}
