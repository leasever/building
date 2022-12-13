export default function Banner({ image, height, title, description, btnBanner }) {
  console.log(image)
  return (
    <>
      <div
        className="banner_section"
        style={{
          minHeight: `${height}`
        }}
      >
        <div
          className="banner"
          style={{
            backgroundImage: `url('/img/${image}')`,
            minHeight: `${height}`
          }}
        ></div>
        <div className="overlay"></div>
        <div className="banner_description">
          <div className="container">
            <div className="title_description">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div>
              {btnBanner.isActive ? (
                !btnBanner.isDonwload ? (
                  <a href={btnBanner.href}>
                    <span className="custom_btn">{btnBanner.title}</span>
                  </a>
                ) : (
                  <a href={btnBanner.href} download={btnBanner.fileName}>
                    <span className="custom_btn">{btnBanner.title}</span>
                  </a>
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
