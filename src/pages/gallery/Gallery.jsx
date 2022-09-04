import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const images = [];
    const galleryLength = 15;

    for (let i = 1; i <= galleryLength; i++) {
      images.push(require(`../../images/gallery${i}.jpg`));
    }
    setImagePaths(images);
  }, [])

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Quam laborum suscipit in facere autem excepturi, consectetur corrupti eum quod dolor, nesciunt reprehenderit laudantium iusto expedita placeat accusamus! Repudiandae, repellendus atque.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            imagePaths.map((image, index) => {
              return<article key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery