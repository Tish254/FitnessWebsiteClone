import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Quam laborum suscipit in facere autem excepturi, consectetur corrupti eum quod dolor, nesciunt reprehenderit laudantium iusto expedita placeat accusamus! Repudiandae, repellendus atque.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:tiegomseeraoscar@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="https://m.me/tish.tish.py/" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+254748379623" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact