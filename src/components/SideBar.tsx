import SideBarButton from './SideBarButton'
import './styles/SideBar.css'

function SideBar() {
  return (
    <div className="sidebar dark-mode">
      <SideBarButton>Open</SideBarButton>
      <SideBarButton>Collection</SideBarButton>
      <SideBarButton>Store</SideBarButton>
    </div>
  )
}

export default SideBar