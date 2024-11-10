import './styles/Header.css'
import MoneyIcon from '/icons/money.svg'
import TestPP from '/testprofilepic.webp'

function Header() {
  return (
    <div className="header dark-mode">
      <div className="wallet-info">
        <img src={MoneyIcon}></img>
        <div className="money-amount">100</div>
      </div>
      <div className="profile-info">
        <div className="name-lvl">
          <div className="name">username</div>
          <div className="lvl">lvl <span className='lvl-num'>12</span></div>
        </div>
        <div className="pp-container">
          <img src={TestPP}></img>
        </div>
      </div>
    </div>
  )
}

export default Header