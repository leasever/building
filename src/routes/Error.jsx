import Banner from '../components/Banner'
import banner from '../data/error/banner.json'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
export default function Error() {
  return (
    <>
      <Menu />
      <div className='project_section'>
        <Banner {...banner} />        
      </div>
      <Footer />
    </>
  )
}
