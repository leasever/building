import { useEffect, useState } from 'react'

export default function Carousel() {
  const images = ['SANA_1.jpg', 'SANA_2.jpg', 'SANA_3.jpg', 'SANA_4.jpg', 'SANA_5.jpg', 'SANA_6.jpg']
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, images)
    }, 4000)
    return () => clearInterval(interval)
  })
  const selectNewImage = (_, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 300)
  }

  const previus = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images, true)
  }

  const goToImage = (imageIndex) => {
    setSelectedImage(images[imageIndex])
    setSelectedIndex(imageIndex)
  }
  return (
    <>
      <div className="carousel_section">
        <img src={`/img/SANA/${selectedImage}`} alt="Proyecto" loading="lazy" className={loaded ? 'loaded' : ' '} onLoad={() => setLoaded(true)} />
        <div className="btn_carousel">
          <div onClick={previus} className="btn_section">
            <div className="arrow-left icon"></div>
          </div>
          <div onClick={next} className="btn_section">
            <div className="arrow-right icon"></div>
          </div>
        </div>
        <div className="dots_carousel">
          {images.map((_, imageIndex) => (
            <div key={imageIndex} className={`dot_carrousel_indicator ${selectedIndex === imageIndex ? ' active_dot' : ' '}`} onClick={() => goToImage(imageIndex)}></div>
          ))}
        </div>
      </div>
    </>
  )
}
