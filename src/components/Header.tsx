import './styles/Header.css'
import MoneyIcon from '/icons/money.svg'

function Header() {
  return (
    <div className="header dark-mode">
      <div className="wallet-info">
        <img src={MoneyIcon}></img>
        <div className="money-amount">0</div>
      </div>
      <div className="profile-info">
        <div className="name-lvl">
          <div className="name">username</div>
          <div className="lvl">Lvl</div>
        </div>
        <div className="pp-container">
          <img></img>
        </div>
      </div>
    </div>
  )
}

export default Header