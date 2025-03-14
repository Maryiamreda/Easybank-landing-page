
import './App.css'
import Navbar from './components/Navbar'
import Thirdsection from './components/Thirdsection'
import Topheader from './components/Topheader'

function App() {

  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div className=' relative flex justify-center items-center md:block'>
        <img src='/images/image-mockups.png' className='absolute z-9 w-100 md:w-135 top-[-140px]  md:-top-20 md:-right-20' />
      </div>
      <Topheader />
      <Thirdsection />
    </div>
  )
}

export default App
