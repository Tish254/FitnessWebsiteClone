import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad eum consectetur maxime error architecto reprehenderit accusamus aperiam atque recusandae!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla adipisci provident exercitationem dicta sunt dolore explicabo eveniet. Dolorum dolor optio ipsa in odit. Consectetur et cupiditate, labore magni nisi repellat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae magnam vero totam laboriosam tempora. Earum laborum voluptas nesciunt ullam placeat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur repellat excepturi eos, autem beatae architecto eveniet consectetur laboriosam sapiente.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla adipisci provident exercitationem dicta sunt dolore explicabo eveniet. Dolorum dolor optio ipsa in odit. Consectetur et cupiditate, labore magni nisi repellat?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla adipisci provident exercitationem dicta sunt dolore explicabo eveniet. Dolorum dolor optio ipsa in odit. Consectetur et cupiditate, labore magni nisi repellat?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla adipisci provident exercitationem dicta sunt dolore explicabo eveniet. Dolorum dolor optio ipsa in odit. Consectetur et cupiditate, labore magni nisi repellat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae magnam vero totam laboriosam tempora. Earum laborum voluptas nesciunt ullam placeat?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur repellat excepturi eos, autem beatae architecto eveniet consectetur laboriosam sapiente.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About