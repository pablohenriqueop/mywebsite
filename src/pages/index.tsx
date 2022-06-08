import Image from "next/image";

import Menu from "../components/Menu";
import styles from "../styles/Home.module.css";

import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <a href="/" className="logo">
              <img src="img/logo.svg" alt="Logo" />
            </a>
            <div className={styles.textWrapper}>
              <h1>
                Oi! Meu nome é <strong>Pablo Henrique</strong>
                <br />
                Desenvolvedor front-end
              </h1>
              <p>
                Aqui você vai encontrar um pequeno resumo sobre o meu trabalho,
                seja bem-vindo 😁
              </p>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/pablo-pinheiro-999960101/"
                  target="_blank"
                >
                  <img src="/img/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://behance.net/pablohenriqueop" target="_blank">
                  <img src="/img/behance.svg" alt="Behance" />
                </a>
              </div>
            </div>
            <div className={styles.btnsWrapper}>
              <Link
                className={styles.anchorLink}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src="img/angle-down.svg" alt="Clique aqui" />
              </Link>
            </div>
          </div>
          <div className={styles.myImageWrapper}>
            <Image
              src="/img/pablohenrique.jpg"
              alt="Pablo Henrique"
              layout="fill"
            />
            <span className={styles.myTag}>SOFTWARE ENGINEER</span>
          </div>
        </section>
        <section className={styles.about} id="about">
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.wrapperText}>
                <h2>Me conheça um pouco.</h2>
                <p>
                  Desenvolvedor front-end há 5 anos, já tive experiência com
                  variados produtos digitais, com expertise no setor de
                  Construção Civil e Cosméticos.
                </p>
                <a
                  href="https://www.linkedin.com/in/pablo-pinheiro-999960101/"
                  className={styles.btn}
                  target="_blank"
                >
                  ACESSE MEU LINKEDIN
                </a>
              </div>
            </div>
            <div className={styles.right}>
              <p>
                Graduado em Sistemas para Internet, atualmente trabalho com
                desenvolvimento web focado em JavaScript, meus principais
                conhecimentos são em React, VueJS, React Native, AdonisJS e
                NestJS principalmente.
              </p>
              <p>
                Por 3 anos tive um perfil fullstack e nos últimos 3 anos tenho
                focado em ser especialista em front-end e seu ecossistema, mas
                também tenho curiosidade e sempre estou estudando algo
                relacionado ao mundo do back-end e devops.
              </p>
              <p>
                Quando não estou trabalhando ou estudando, estou passando um
                tempo com a família, jogando algum joguinho ou praticando meu
                principal hobby que é tocar bateria e flauta. 🥁
              </p>
            </div>
          </div>
        </section>
        <section className={styles.jobs} id="jobs">
          <div className={styles.jobsDots}>
            <Image src="/img/before-works.png" alt="Dots" layout="fill" />
          </div>
          <div className={styles.container}>
            <h2>
              Trabalhos <br /> em destaque <span>.</span>
            </h2>
          </div>
          <div className={styles.container}>
            <div className={styles.wrapperJobs}>
              <article>
                <div className={styles.thumb}>
                  <Image
                    src="/img/projects/toureasy.jpg"
                    alt="Tour Easy Now"
                    layout="fill"
                  />
                </div>
                <div className={styles.descriptionJobs}>
                  <h3>Tour Easy Now</h3>
                  <span>HTML5 - CSS3 - JS - Wordpress</span>
                  <div className={styles.wrapperCall}>
                    <p>Meu primeiro projeto internacional 😊</p>
                    <a
                      href="https://www.behance.net/gallery/109053597/Tour-Easy-Now"
                      target="_blank"
                    >
                      <img
                        src="img/angle-down.svg"
                        alt="Clique aqui"
                        width="25px"
                      />
                    </a>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.thumb}>
                  <Image
                    src="/img/projects/tahaa.jpg"
                    alt="Tahaa Home Resort"
                    layout="fill"
                  />
                </div>
                <div className={styles.descriptionJobs}>
                  <h3>Tahaa Home Resort</h3>
                  <span>HTML5 - CSS3 - JS</span>
                  <div className={styles.wrapperCall}>
                    <p>
                      Uma linda landing page pra conversão de leads, foi um
                      sucesso de vendas.
                    </p>
                    <a href="https://tahaahomeresort.com.br/" target="_blank">
                      <img
                        src="img/angle-down.svg"
                        alt="Clique aqui"
                        width="25px"
                      />
                    </a>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.thumb}>
                  <Image
                    src="/img/projects/sergipeweb.jpg"
                    alt="Sergipe Web"
                    layout="fill"
                  />
                </div>
                <div className={styles.descriptionJobs}>
                  <h3>Sergipe Web</h3>
                  <span>HTML5 - CSS3 - JS</span>
                  <div className={styles.wrapperCall}>
                    <p>Site da antiga Sergipe Web</p>
                    <a
                      href="https://www.behance.net/gallery/92426521/Sergipe-Web"
                      target="_blank"
                    >
                      <img
                        src="img/angle-down.svg"
                        alt="Clique aqui"
                        width="25px"
                      />
                    </a>
                  </div>
                </div>
              </article>
              <article>
                <div className={styles.thumb}>
                  <Image
                    src="/img/projects/celi.jpg"
                    alt="Construtora Celi"
                    layout="fill"
                  />
                </div>
                <div className={styles.descriptionJobs}>
                  <h3>Construtora Celi</h3>
                  <span>HTML5 - CSS3 - JS - Wordpress</span>
                  <div className={styles.wrapperCall}>
                    <p>
                      Uma das principais construtoras de Sergipe, fizemos um
                      projeto bem interessante e elegante
                    </p>
                    <a href="https://celi.com.br/" target="_blank">
                      <img
                        src="img/angle-down.svg"
                        alt="Clique aqui"
                        width="25px"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className={styles.wrapperBtn}>
              <a
                href="https://behance.net/pablohenriqueop"
                className={styles.btn}
                target="_blank"
              >
                ACESSE MEU BEHANCE
              </a>
            </div>
          </div>
        </section>
        <footer className={styles.mainFooter}>
          <div className={styles.container}>
            <div>
              <h3>
                <strong>Tem um projeto?</strong> <br />
                Vamos conversar
              </h3>
            </div>
            <a href="/" className={styles.logoFooter}>
              <img src="img/logo.svg" alt="Logo" />
            </a>
            <div className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/pablo-pinheiro-999960101/"
                target="_blank"
              >
                <img src="/img/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://behance.net/pablohenriqueop" target="_blank">
                <img src="/img/behance.svg" alt="Behance" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
