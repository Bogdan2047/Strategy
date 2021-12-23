import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { About } from './component/about us/about';
import { Footer } from './component/footer/footer';
import { Header } from './component/header/header';
import { Home } from './component/home/home';
import { Servise } from './component/servise/servise';


function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Header/>
        <Routes>
          <>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/servise' element={<Servise/>}/>
        </>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
