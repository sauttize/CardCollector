import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import OpenPack from './pages/OpenPack';
import Collection from './pages/Collection';
import Store from './pages/Store';

function App() {
  const [currentPage, setCurrentPage] = useState('Open');

  return (
    <div className='layout'>
      <SideBar onButtonClick={setCurrentPage} />
      
      <div className="right-side">
        <Header />
        <div className="contents">
          {currentPage === 'Open' && <OpenPack/>}
          {currentPage === 'Collection' && <Collection/>}
          {currentPage === 'Store' && <Store/>}
        </div>
        
      </div>
    </div>
  )
}

export default App;
