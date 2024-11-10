import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  const [currentPage, setCurrentPage] = useState('Open');

  return (
    <div className='layout'>
      <SideBar onButtonClick={setCurrentPage} />
      
      <div className="right-side">
        <Header />
        <div className="contents">
          {currentPage === 'Open' && <div>Open Page Content</div>}
          {currentPage === 'Collection' && <div>Collection Page Content</div>}
          {currentPage === 'Store' && <div>Store Page Content</div>}
        </div>
        
      </div>
    </div>
  )
}

export default App;
