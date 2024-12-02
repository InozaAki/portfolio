import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { Button, Carousel, Divider } from "antd";
import { Card, Col, Row } from "antd";
import polaroid from "./assets/images/polaroid.svg";
import coding from "./assets/images/coding.svg";
import reading from "./assets/images/reading.svg";
import homeImg from "./assets/images/home_img.svg";
import django from "./assets/images/tech/django.svg";
import java from "./assets/images/tech/java.svg";
import js from "./assets/images/tech/js.svg";
import oracle from "./assets/images/tech/oracle.svg";
import react from "./assets/images/tech/react.svg";
import spring from "./assets/images/tech/spring.svg";

function App() {
  
  const { Meta } = Card;
  const contentStyle = {
    height: '50rem',
    color: '#fff',
    lineHeight: '50rem',
    textAlign: 'center',
    background: '#22263b',
  }

  useEffect(() => {
    const smoothScroll = (e) => {
      if (e.target.tagName === "A" && e.target.hash !== "") {
        e.preventDefault();
        const targetID = e.target.hash.substring(1);
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.offsetTop -
              document.querySelector("nav").offsetHeight,
            behavior: "smooth",
          });
        }
      }
    };
    document.querySelector("nav").addEventListener("click", smoothScroll);

    return () => {
      document.querySelector("nav").removeEventListener("click", smoothScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main className="App-main">
          <section
            id="home"
            className="main-section grid justify-items-center items-center text-3xl grid-cols-2"
          >
            <div className="grid justify-items-center">
              <p>
                Hola! Soy{"  "}
                <a href="https://github.com/InozaAki" className="nameDev">
                  Axel Espinosa
                </a>
              </p>
              <p className="text-2xl">Desarrollador de Software</p>
              <Button className="mt-2" type="primary" onClick={scrollToContact}>
                Contáctame
              </Button>
            </div>
            <div>
              <img alt="home_img" src={homeImg} style={{height: '350px'}}></img>
            </div>
          </section>
          <section id="about" className="main-section">
            <h1 id="title">Sobre de mí</h1>
            <p>
              Desarrollador actualmente yendo por la ruta <a style={{color: "#8ac6d1"}}>FullStack</a>, con una pasión por la
              tecnología y una curiosidad por explorar este vasto mundo. Mi
              camino en el rubro me ha llevado por un apasionante viaje a través
              de las complejidades de la computación.
            </p>
            <div className="hobbies">
              <Divider
                style={{
                  color: "#a4b9f1",
                  borderColor: "#374056",
                  fontSize: "1.25rem",
                }}
              >
                Hobbies
              </Divider>
              <Row gutter={16} className="my-6">
                <Col span={8}>
                  <Meta
                    title="Manga"
                    className="p-1 text-2xl"
                    style={{ textAlign: "center" }}
                  ></Meta>
                  <Card
                    className="Card"
                    bordered={false}
                    cover={
                      <img
                        alt="manga"
                        src={reading}
                        style={{ width: "100%", height: "150px" }}
                      ></img>
                    }
                  >
                    <p>
                      Me encanta leer manga, especialmente slice of life o
                      mangas de comedia.
                    </p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Meta
                    title="Fotografía"
                    className="p-1 text-2xl"
                    style={{ textAlign: "center" }}
                  ></Meta>
                  <Card
                    className="Card"
                    bordered={false}
                    cover={
                      <img
                        alt="photography"
                        src={polaroid}
                        style={{ width: "100%", height: "150px" }}
                      ></img>
                    }
                  >
                    <p>
                      La fotografía me encanta por permitirme ver la belleza de
                      lo que nos rodea.
                    </p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Meta
                    title="Programar"
                    className="p-1 text-2xl"
                    style={{ textAlign: "center" }}
                  ></Meta>
                  <Card
                    className="Card"
                    bordered={false}
                    cover={
                      <img
                        alt="coding"
                        src={coding}
                        style={{ width: "100%", height: "150px" }}
                      ></img>
                    }
                  >
                    La sencillez y complejidad detrás de cada aplicación es
                    fascinante.
                  </Card>
                </Col>
              </Row>
            </div>
            <div className="skill-section">
              <Divider
                style={{
                  color: "#a4b9f1",
                  borderColor: "#374056",
                  fontSize: "1.25rem",
                }}
              >
                Habilidades Técnicas
              </Divider>
              <div className="skills-rows">
               <Row gutter={16} className="justify-center">
                  <Col span={2}>
                    <Card bordered={false} className="Card">
                      <img alt="java" src={java} style={{ height: "100px" }}></img>
                      <p>Java</p>
                    </Card>
                  </Col>
                  <Col span={2}>
                    <Card bordered={false} className="Card">
                      <img alt="spring" style={{ height: "100px" }} src={spring} ></img>
                      <p>Spring</p>
                    </Card>
                  </Col>
                  <Col span={2}>
                    <Card bordered={false} className="Card">
                      <img alt="react" style={{ height: "100px" }} src={react} ></img>
                      <p>React</p>
                    </Card>
                  </Col>
                </Row>
                <Row gutter={16} className="mt-2 justify-center">
                  <Col span={2}>
                    <Card bordered={false} className="Card" >
                      <img alt="js" style={{ height: "100px" }} src={js} ></img>
                      <p>JavaScript</p>
                    </Card>
                  </Col>
                  <Col span={2}>
                    <Card bordered={false} className="Card">
                      <img alt="django" style={{ height: "100px"}} src={django} ></img>
                      <p>Django</p>
                    </Card>
                  </Col>
                  <Col span={2}>
                    <Card bordered={false} className="Card">
                      <img alt="oracle" style={{ height: "100px" }} src={oracle}></img>
                      <p>Oracle DB</p>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
          <section id="projects" className="main-section">
            <h1 id="title" className="text-center">Proyectos</h1>
            <div>
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
          </section>
          <section className="contact" id="contact">
            <h1 id="title">Contacto</h1>
            <div className=""> 
              <p className="my-10 italic">"Una vez que superas una tormenta, te conviertes en la tormenta."</p> 
              <div className="location flex items-center gap-1 justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"> <circle cx="12" cy="10" r="3" /> <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                  </g>
                </svg>
                <p> Guadalajara, Jalisco </p> 
              </div>
            </div>    
            <Divider style={{color: "#6c6f85", borderColor: "#374056"}}>
              <div className="flex items-center gap-2">
                <a href="https://github.com/InozaAki">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"> <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                  </svg>
                </a>
                <a href="mailto:axelespinoza887@gmail.com">                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"> <path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>
                  </svg>
                </a>
                <a href="https://x.com/JunoSpinoza">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 16 16"> <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/>
                  </svg>
                </a>     
              </div>
            </Divider>
          </section>
        </main>
      </div>

      <style>{`
        .main-section {
          padding: 40px 20px;
          min-height: 100vh;
        }
        .nameDev {
          font-size: 2rem;
          color: #7aa2f7;
          text-decoration: underline;
        }
        .contact {
          margin-top: 15rem;
          padding: 40px 20px;
          text-align: center;
        }
        .contact h1 {
          font-size: 2rem;
          margin-bottom: 2px;
        }
        .contact {
          background: linear-gradient(to bottom, #191c2a, #1f2333);
          padding: 60px 20px;
        }
        .contact svg {
          transition: transform 0.3s ease;
        }

        .contact svg:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}

export default App;
