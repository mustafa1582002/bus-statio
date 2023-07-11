import Header from './shared/Header';
import Footer from './shared/Footer';
import Aside from './shared/Aside';
import './style/App.css';
import './style/Home.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className='Home'>
        <Aside />
        <Outlet/>
      </div>
      <Footer />
    </>
  );
}

export default App;
