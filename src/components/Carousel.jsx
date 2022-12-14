import { useEffect, useState } from 'react'
export default function Carousel({ imageList }) {
  const images = imageList
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

  const goToImage = (index) => {
    setSelectedImage(images[index])
    setSelectedIndex(index)
  }
  return (
    <>
      <div className="carousel_section">
        <img src={selectedImage} alt="Proyecto" loading="lazy" className={loaded ? 'loaded' : ' '} onLoad={() => setLoaded(true)} />
        <div onClick={previus} className="btn_carousel btn_previus">
          <div className="arrow-left icon"></div>
        </div>
        <div onClick={next} className="btn_carousel btn_next">
          <div className="arrow-right icon"></div>
        </div>
        <div className="dots_carousel">
          {images.map((_, index) => (
            <div key={index} className={`dot_carrousel_indicator ${selectedIndex === index ? ' active_dot' : ' '}`} onClick={() => goToImage(index)}></div>
          ))}
        </div>
      </div>
    </>
  )
}
