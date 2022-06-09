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
                  <svg
                    width="34"
                    height="34"
                    fill="none"
                    role="img"
                    aria-labelledby="title_logo_linekdin"
                    aria-describedby="description_logo_linekdin"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="title_logo_linekdin">LinkedIn logo</title>
                    <desc id="description_logo_linekdin">
                      Logotype representing the letters I and N
                    </desc>
                    <circle
                      cx="17"
                      cy="17"
                      r="16.5"
                      stroke="var(--white2)"
                    ></circle>
                    <path
                      d="M13.333 10.683c0 .943-.733 1.683-1.666 1.683-.934 0-1.667-.74-1.667-1.683C10 9.741 10.733 9 11.667 9c.933 0 1.666.74 1.666 1.683Zm0 3.03H10v10.77h3.333v-10.77Zm5.334 0h-3.334v10.77h3.334V18.83c0-3.164 4-3.434 4 0v5.655H26v-6.8c0-5.318-5.933-5.116-7.333-2.49v-1.482Z"
                      fill="var(--white2)"
                    ></path>
                  </svg>
                </a>
                <a href="https://behance.net/pablohenriqueop" target="_blank">
                  <svg
                    width="34"
                    height="34"
                    fill="none"
                    role="img"
                    aria-labelledby="title_logo_behance"
                    aria-describedby="description_logo_behance"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="title_logo_behance">Behance logo</title>
                    <desc id="description_logo_behance">
                      Logotype representing the letters B and E
                    </desc>
                    <circle
                      cx="17"
                      cy="17"
                      r="16.5"
                      stroke="var(--white2)"
                    ></circle>
                    <path
                      d="M25.417 12.624h-5.542V11h5.542v1.624Zm1.345 8.12c-.316 1.055-1.583 2.436-4.037 2.436-2.454 0-4.433-1.38-4.433-4.629 0-3.166 1.82-4.79 4.354-4.79 2.454 0 3.958 1.461 4.275 3.572.079.406.079.975.079 1.787h-6.333c.079 2.598 2.77 2.68 3.641 1.624h2.454Zm-6.095-3.248h3.958c-.08-1.218-.87-1.787-1.98-1.787-1.107 0-1.74.569-1.978 1.787Zm-7.521 5.684H8V11h5.542c4.354.081 4.433 4.385 2.137 5.603 2.692 1.055 2.771 6.576-2.533 6.576Zm-2.771-7.308h2.85c1.98 0 2.296-2.436-.237-2.436h-2.613v2.436Zm2.692 2.436h-2.692v2.436h2.613c2.454 0 2.295-2.436.079-2.436Z"
                      fill="var(--white2)"
                    ></path>
                  </svg>
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
                  Construção Civil e Cosméticos. Atualmente trabalho no Grupo
                  Boticário como desenvolvedor front-end sênior.
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
                    <a href="https://toureasynow.com/" target="_blank">
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
