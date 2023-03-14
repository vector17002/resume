import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { About,Contact,Hero,Navbar,StarsCanvas,Tech,Works,Timeline} from './components';
function App() {
return(
  <BrowserRouter>
  <div className='relative z-0 bg-primary '>
     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        <Hero/>
     </div>
     <About/>
     <Timeline/>
     <Tech/>
     <Works/>
     <div className='relative z-0'>
       <Contact/>
       <StarsCanvas/>
     </div>
  </div>
  </BrowserRouter>
)
}

export default App
